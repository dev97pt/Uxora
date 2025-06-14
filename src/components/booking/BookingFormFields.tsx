
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface BookingFormFieldsProps {
  formData: FormData;
  onFormDataChange: (data: FormData) => void;
  selectedDate: Date | undefined;
  selectedTime: string;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export const BookingFormFields = ({
  formData,
  onFormDataChange,
  selectedDate,
  selectedTime,
  isSubmitting,
  onSubmit
}: BookingFormFieldsProps) => {
  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
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
            onChange={(e) => onFormDataChange({ ...formData, email: e.target.value })}
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
            onChange={(e) => onFormDataChange({ ...formData, phone: e.target.value })}
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
            onChange={(e) => onFormDataChange({ ...formData, message: e.target.value })}
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
  );
};
