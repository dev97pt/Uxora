
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingRequest {
  bookingId: string;
  name: string;
  email: string;
  datetime: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { bookingId, name, email, datetime, message }: BookingRequest = await req.json();

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get Google Calendar credentials from environment
    const googleClientId = Deno.env.get("GOOGLE_CLIENT_ID");
    const googleClientSecret = Deno.env.get("GOOGLE_CLIENT_SECRET");
    const googleRefreshToken = Deno.env.get("GOOGLE_REFRESH_TOKEN");

    if (!googleClientId || !googleClientSecret || !googleRefreshToken) {
      console.error("Missing Google Calendar credentials");
      return new Response(
        JSON.stringify({ error: "Google Calendar not configured" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Get access token
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: googleClientId,
        client_secret: googleClientSecret,
        refresh_token: googleRefreshToken,
        grant_type: "refresh_token",
      }),
    });

    const tokenData = await tokenResponse.json();
    
    if (!tokenData.access_token) {
      throw new Error("Failed to get Google access token");
    }

    // Create calendar event
    const eventStart = new Date(datetime);
    const eventEnd = new Date(eventStart.getTime() + 30 * 60 * 1000); // 30 minutes

    const calendarEvent = {
      summary: `Discovery Call with ${name}`,
      description: `Discovery call scheduled via website.\n\nClient: ${name}\nEmail: ${email}\n\nProject Details:\n${message || 'No additional details provided'}`,
      start: {
        dateTime: eventStart.toISOString(),
        timeZone: "America/New_York", // Adjust to your timezone
      },
      end: {
        dateTime: eventEnd.toISOString(),
        timeZone: "America/New_York", // Adjust to your timezone
      },
      attendees: [
        { email: email },
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 }, // 24 hours
          { method: "email", minutes: 60 }, // 1 hour
        ],
      },
    };

    const calendarResponse = await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${tokenData.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(calendarEvent),
      }
    );

    const calendarData = await calendarResponse.json();

    if (!calendarResponse.ok) {
      throw new Error(`Calendar API error: ${JSON.stringify(calendarData)}`);
    }

    // Update booking with Google Event ID
    await supabase
      .from('bookings')
      .update({ 
        google_event_id: calendarData.id,
        status: 'confirmed'
      })
      .eq('id', bookingId);

    console.log("Calendar event created successfully:", calendarData.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        eventId: calendarData.id,
        eventLink: calendarData.htmlLink 
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error: any) {
    console.error("Error creating calendar event:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
