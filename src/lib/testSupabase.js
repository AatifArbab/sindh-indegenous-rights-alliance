import { supabase } from "./supabaseClient";

export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error("❌ Supabase connection error:", error.message);
      return false;
    }

    console.log("✅ Supabase connected successfully!");
    console.log("Session response:", data);

    return true;
  } catch (err) {
    console.error("❌ Supabase connection failed:", err.message);
    return false;
  }
}