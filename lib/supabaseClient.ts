import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://fpgfodvrkxnnelitclfb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwZ2ZvZHZya3hubmVsaXRjbGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5MTQxMDgsImV4cCI6MTk5MjQ5MDEwOH0.BlU7fNGojgWcoMuW1KurFVCI5yPDWyVYvoNyBzGcZtQ'
);
