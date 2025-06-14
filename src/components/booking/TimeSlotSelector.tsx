
import { Button } from "@/components/ui/button";

interface TimeSlotSelectorProps {
  selectedDate: Date | undefined;
  selectedTime: string;
  bookedSlots: string[];
  onTimeSelect: (time: string) => void;
}

export const TimeSlotSelector = ({ 
  selectedDate, 
  selectedTime, 
  bookedSlots, 
  onTimeSelect 
}: TimeSlotSelectorProps) => {
  // Available time slots from 12pm to 6pm
  const timeSlots = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
  ];

  if (!selectedDate) {
    return null;
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Select Time</h3>
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((time) => (
          <Button
            key={time}
            variant={selectedTime === time ? "default" : "outline"}
            disabled={bookedSlots.includes(time)}
            onClick={() => onTimeSelect(time)}
            className="text-sm"
          >
            {time}
          </Button>
        ))}
      </div>
    </div>
  );
};
