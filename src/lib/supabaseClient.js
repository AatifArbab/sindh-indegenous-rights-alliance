import { createClient } from "@supabase/supabase-js";

// VITE_SUPABASE_ANON_KEY ya VITE_SUPABASE_PUBLISHABLE_KEY dono ko check karein
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase environment variables are missing! Check Vercel settings.");
}

export const supabase = createClient(
  supabaseUrl || "",
  supabaseKey || ""
);