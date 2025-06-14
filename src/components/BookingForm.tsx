
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { setHours, setMinutes } from "date-fns";
import { DateSelector } from "./booking/DateSelector";
import { TimeSlotSelector } from "./booking/TimeSlotSelector";
import { BookingFormFields } from "./booking/BookingFormFields";

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

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime("");
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
      if (data) {
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

  return (
    <section id="booking" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Book a Discovery Call</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Schedule a 30-minute discovery call to discuss your project needs. Available Monday to Friday, 12 PM - 6 PM.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Calendar Section */}
            <div className="space-y-4 sm:space-y-6">
              <DateSelector
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
                onBookedSlotsChange={setBookedSlots}
              />
              
              <TimeSlotSelector
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                bookedSlots={bookedSlots}
                onTimeSelect={setSelectedTime}
              />
            </div>

            {/* Form Section */}
            <BookingFormFields
              formData={formData}
              onFormDataChange={setFormData}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              isSubmitting={isSubmitting}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
