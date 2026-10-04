import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { createNews } from "../../services/newsService";
import { uploadNewsImage } from "../../services/storageService";

const initialForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "Community",
  author: "SIRA Media Team",
  featured: false,
  published: false,
};

const createSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const AddNews = () => {
  const [formData, setFormData] = useState(initialForm);
  const [image, setImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => {
      const updated = {
        ...current,
        [name]: type === "checkbox" ? checked : value,
      };

      // Title se automatically slug generate hoga
      if (name === "title") {
        updated.slug = createSlug(value);
      }

      return updated;
    });
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files?.[0] || null;

    if (!selectedImage) {
      setImage(null);
      return;
    }

    // Maximum 2 MB
    if (selectedImage.size > 2 * 1024 * 1024) {
      setErrorMessage("Feature image maximum 2 MB honi chahiye.");
      event.target.value = "";
      setImage(null);
      return;
    }

    // Allowed image types
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(selectedImage.type)) {
      setErrorMessage(
        "Sirf JPG, PNG ya WebP image upload karein."
      );
      event.target.value = "";
      setImage(null);
      return;
    }

    setErrorMessage("");
    setImage(selectedImage);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    setErrorMessage("");

    try {
      let imageUrl = null;

      // Upload feature image
      if (image) {
        const uploadedImage = await uploadNewsImage(image);
        imageUrl = uploadedImage.publicUrl;
      }

      // Save news in Supabase
      await createNews({
        title: formData.title.trim(),
        slug: formData.slug.trim(),
        excerpt: formData.excerpt.trim(),
        content: formData.content.trim(),
        category: formData.category,
        author: formData.author.trim(),
        image_url: imageUrl,
        featured: formData.featured,
        published: formData.published,
      });

      // News save hone ke baad Manage News page
      navigate("/admin/news", {
        replace: true,
      });
    } catch (error) {
      console.error("ADD NEWS ERROR:", error);

      setErrorMessage(
        error?.message || "News save nahi ho saki."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="admin-news-form-page">
      {/* Page Heading */}
      <div className="admin-page-heading">
        <div>
          <h2>Add News</h2>
          <p>
            New article ki information enter karein aur publish
            karein.
          </p>
        </div>
      </div>

      {/* Error */}
      {errorMessage && (
        <div className="admin-alert admin-alert-error">
          {errorMessage}
        </div>
      )}

      {/* Form */}
      <form
        className="admin-news-form"
        onSubmit={handleSubmit}
      >
        {/* News Title */}
        <div className="form-group">
          <label htmlFor="title">
            News Title *
          </label>

          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter news title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* URL Slug */}
        <div className="form-group">
          <label htmlFor="slug">
            URL Slug *
          </label>

          <input
            id="slug"
            name="slug"
            type="text"
            placeholder="news-url-slug"
            value={formData.slug}
            onChange={handleChange}
            required
          />

          <small>
            Example:{" "}
            <strong>
              indigenous-rights-awareness-program
            </strong>
          </small>
        </div>

        {/* Short Summary */}
        <div className="form-group">
          <label htmlFor="excerpt">
            Short Summary *
          </label>

          <textarea
            id="excerpt"
            name="excerpt"
            rows="4"
            placeholder="Write a short summary of the article..."
            value={formData.excerpt}
            onChange={handleChange}
            required
          />
        </div>

        {/* Complete Article */}
        <div className="form-group">
          <label htmlFor="content">
            Complete Article *
          </label>

          <textarea
            id="content"
            name="content"
            rows="14"
            placeholder="Write the complete article here..."
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category + Author */}
        <div className="admin-form-grid">
          {/* Category */}
          <div className="form-group">
            <label htmlFor="category">
              Category *
            </label>

            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="Community">
                Community
              </option>

              <option value="Rights">
                Rights
              </option>

              <option value="Environment">
                Environment
              </option>

              <option value="Membership">
                Membership
              </option>

              <option value="Culture">
                Culture
              </option>
            </select>
          </div>

          {/* Author */}
          <div className="form-group">
            <label htmlFor="author">
              Author *
            </label>

            <input
              id="author"
              name="author"
              type="text"
              placeholder="Enter author name"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Feature Image */}
        <div className="form-group">
          <label htmlFor="newsImage">
            Feature Image
          </label>

          <input
            id="newsImage"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleImageChange}
          />

          <small>
            JPG, PNG or WebP — Maximum 2 MB.
          </small>

          {/* Selected image name */}
          {image && (
            <div className="selected-image-name">
              Selected: <strong>{image.name}</strong>
            </div>
          )}
        </div>

        {/* Publish / Featured */}
        <div className="admin-checkboxes">
          <label className="checkbox-group">
            <input
              name="featured"
              type="checkbox"
              checked={formData.featured}
              onChange={handleChange}
            />

            <span>
              Featured News
            </span>
          </label>

          <label className="checkbox-group">
            <input
              name="published"
              type="checkbox"
              checked={formData.published}
              onChange={handleChange}
            />

            <span>
              Publish Immediately
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div className="admin-form-actions">
          <button
            type="button"
            className="button button-secondary"
            onClick={() => navigate("/admin/news")}
            disabled={submitting}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="button button-primary"
            disabled={submitting}
          >
            <FaSave />

            {submitting
              ? "Saving..."
              : "Save News"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddNews;