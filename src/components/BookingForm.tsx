
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { format, addDays, isWeekend, setHours, setMinutes } from "date-fns";

export const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const { toast } = useToast();

  // Available time slots from 12pm to 6pm
  const timeSlots = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
  ];

  // Check availability when date changes
  const handleDateSelect = async (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime("");
    
    if (date) {
      const { data: bookings } = await supabase
        .from('bookings')
        .select('meeting_datetime')
        .gte('meeting_datetime', format(date, 'yyyy-MM-dd'))
        .lt('meeting_datetime', format(addDays(date, 1), 'yyyy-MM-dd'))
        .eq('status', 'confirmed');
      
      if (bookings) {
        const bookedTimes = bookings.map(booking => 
          format(new Date(booking.meeting_datetime), 'HH:mm')
        );
        setBookedSlots(bookedTimes);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select date and time",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create meeting datetime
      const [hours, minutes] = selectedTime.split(':');
      const meetingDateTime = setMinutes(setHours(selectedDate, parseInt(hours)), parseInt(minutes));

      // Insert booking into database
      const { data, error } = await supabase
        .from('bookings')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          meeting_datetime: meetingDateTime.toISOString(),
          status: 'pending'
        })
        .select()
        .single();

      if (error) throw error;

      // Call edge function to create Google Calendar event
      const { error: calendarError } = await supabase.functions.invoke('create-calendar-event', {
        body: {
          bookingId: data.id,
          name: formData.name,
          email: formData.email,
          datetime: meetingDateTime.toISOString(),
          message: formData.message
        }
      });

      if (calendarError) {
        console.error('Calendar error:', calendarError);
        // Still show success as booking was created
      }

      toast({
        title: "Meeting booked successfully!",
        description: "You'll receive a confirmation email shortly."
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSelectedDate(undefined);
      setSelectedTime("");

    } catch (error: any) {
      toast({
        title: "Booking failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Disable weekends and past dates
  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || isWeekend(date);
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book a Discovery Call</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a 30-minute discovery call to discuss your project needs. Available Monday to Friday, 12 PM - 6 PM.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendar Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Select Date</h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={isDateDisabled}
                  className="rounded-md border"
                />
              </div>

              {selectedDate && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Select Time</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        disabled={bookedSlots.includes(time)}
                        onClick={() => setSelectedTime(time)}
                        className="text-sm"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Form Section */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {selectedDate && selectedTime && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Selected:</strong> {format(selectedDate, 'MMMM d, yyyy')} at {selectedTime}
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting || !selectedDate || !selectedTime}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {isSubmitting ? "Booking..." : "Book Discovery Call"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
