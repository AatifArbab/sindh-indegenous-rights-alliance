import { supabase } from "../lib/supabaseClient";

export const submitContactForm = async (formData) => {
  const { data, error } = await supabase
    .from("contact_messages")
    .insert([
      {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone?.trim() || null,
        subject: formData.subject.trim(),
        inquiry_type:
          formData.inquiryType || "General Information",
        message: formData.message.trim(),
        status: "new",
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getContactMessages = async () => {
  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

export const updateMessageStatus = async (id, status) => {
  const { data, error } = await supabase
    .from("contact_messages")
    .update({ status })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deleteContactMessage = async (id) => {
  const { error } = await supabase
    .from("contact_messages")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
};