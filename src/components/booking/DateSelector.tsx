
import { Calendar } from "@/components/ui/calendar";
import { format, addDays, isWeekend } from "date-fns";
import { supabase } from "@/integrations/supabase/client";

interface DateSelectorProps {
  selectedDate: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
  onBookedSlotsChange: (slots: string[]) => void;
}

export const DateSelector = ({ selectedDate, onDateSelect, onBookedSlotsChange }: DateSelectorProps) => {
  // Check availability when date changes
  const handleDateSelect = async (date: Date | undefined) => {
    onDateSelect(date);
    
    if (date) {
      try {
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
          onBookedSlotsChange(bookedTimes);
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    }
  };

  // Disable weekends and past dates
  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || isWeekend(date);
  };

  return (
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
  );
};
