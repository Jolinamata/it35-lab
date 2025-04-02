import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient('https://kakquyoqwojooloblpan.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtha3F1eW9xd29qb29sb2JscGFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzODUxNjksImV4cCI6MjA1ODk2MTE2OX0._zePK0Uc5-U9tJz0B6hwe4YlZ8u3i0Ayc3wJYSuYZhc'); 