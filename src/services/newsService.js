import { supabase } from "../lib/supabaseClient";

export const getPublishedNews = async () => {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

export const getFeaturedNews = async () => {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("published", true)
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

export const getNewsBySlug = async (slug) => {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getAllNewsForAdmin = async () => {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

export const getNewsById = async (id) => {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createNews = async (newsData) => {
  const { data, error } = await supabase
    .from("news")
    .insert([newsData])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const updateNews = async (id, newsData) => {
  const { data, error } = await supabase
    .from("news")
    .update({
      ...newsData,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deleteNews = async (id) => {
  const { error } = await supabase
    .from("news")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
};