import { supabase } from "../lib/supabaseClient";

const BUCKET_NAME = "news-images";

const createUniqueFileName = (file) => {
  const extension = file.name.split(".").pop();
  const randomPart = crypto.randomUUID();

  return `${Date.now()}-${randomPart}.${extension}`;
};

export const uploadNewsImage = async (file) => {
  if (!file) {
    throw new Error("Please select an image.");
  }

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  if (!allowedTypes.includes(file.type)) {
    throw new Error("Only JPG, PNG and WebP images are allowed.");
  }

  if (file.size > 2 * 1024 * 1024) {
    throw new Error("Image size must be less than 2 MB.");
  }

  const fileName = createUniqueFileName(file);

  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(fileName);

  return {
    fileName,
    publicUrl: data.publicUrl,
  };
};

export const deleteNewsImage = async (fileName) => {
  if (!fileName) {
    return;
  }

  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .remove([fileName]);

  if (error) {
    throw new Error(error.message);
  }
};