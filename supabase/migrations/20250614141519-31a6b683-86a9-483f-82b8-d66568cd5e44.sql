
-- Create bookings table for storing meeting appointments
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  meeting_datetime TIMESTAMP WITH TIME ZONE NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  google_event_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) 
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert bookings (public booking form)
CREATE POLICY "Anyone can create bookings" 
  ON public.bookings 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows anyone to read bookings (for checking availability)
CREATE POLICY "Anyone can view bookings" 
  ON public.bookings 
  FOR SELECT 
  USING (true);

-- Create index for faster queries on meeting_datetime
CREATE INDEX idx_bookings_meeting_datetime ON public.bookings(meeting_datetime);
