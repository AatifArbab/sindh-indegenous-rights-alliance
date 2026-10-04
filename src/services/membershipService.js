import { supabase } from "../lib/supabaseClient";

export const submitMembershipForm = async (formData) => {
  const { error } = await supabase
    .from("membership_applications")
    .insert([
      {
        full_name: formData.fullName.trim(),
        father_name: formData.fatherName.trim(),
        cnic: formData.cnic.trim(),
        date_of_birth: formData.dateOfBirth || null,
        gender: formData.gender || null,
        phone: formData.phone.trim(),
        email: formData.email?.trim() || null,
        district: formData.district.trim(),
        address: formData.address.trim(),
        occupation: formData.occupation?.trim() || null,
        membership_type: formData.membershipType,
        interest_area: formData.message?.trim() || null,
      },
    ]);

  if (error) {
    throw error;
  }

  return { success: true };
};

export const getMembershipApplications = async () => {
  const { data, error } = await supabase
    .from("membership_applications")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
};

export const updateMembershipStatus = async (id, status) => {
  const { data, error } = await supabase
    .from("membership_applications")
    .update({ status })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const deleteMembershipApplication = async (id) => {
  const { error } = await supabase
    .from("membership_applications")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }

  return { success: true };
};