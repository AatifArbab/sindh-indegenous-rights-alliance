import { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import LoadingSpinner from "../../components/LoadingSpinner";
import {
  getNewsById,
  updateNews,
} from "../../services/newsService";
import { uploadNewsImage } from "../../services/storageService";

const createSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const EditNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
    category: "Community",
    author: "SIRA Media Team",
    image_url: "",
    featured: false,
    published: false,
  });

  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const article = await getNewsById(id);

        if (!article) {
          setErrorMessage("News article nahi mila.");
          return;
        }

        setFormData({
          title: article.title || "",
          slug: article.slug || "",
          summary: article.summary || "",
          content: article.content || "",
          category: article.category || "Community",
          author: article.author || "SIRA Media Team",
          image_url: article.image_url || "",
          featured: Boolean(article.featured),
          published: Boolean(article.published),
        });
      } catch (error) {
        console.error(error);
        setErrorMessage("News article load nahi hua.");
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => {
      const updated = {
        ...current,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "title") {
        updated.slug = createSlug(value);
      }

      return updated;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      let imageUrl = formData.image_url;

      if (newImage) {
        const uploadedImage =
          await uploadNewsImage(newImage);

        imageUrl = uploadedImage.publicUrl;
      }

      await updateNews(id, {
        title: formData.title.trim(),
        slug: formData.slug.trim(),
        summary: formData.summary.trim(),
        content: formData.content.trim(),
        category: formData.category,
        author: formData.author.trim(),
        image_url: imageUrl || null,
        featured: formData.featured,
        published: formData.published,
      });

      navigate("/admin/news", { replace: true });
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error.message || "News update nahi ho saki."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <LoadingSpinner message="Loading article..." />;
  }

  return (
    <section className="admin-news-form-page">
      <div className="admin-page-heading">
        <div>
          <h2>Edit News</h2>
          <p>Article information update karein.</p>
        </div>
      </div>

      {errorMessage && (
        <div className="admin-alert admin-alert-error">
          {errorMessage}
        </div>
      )}

      <form
        className="admin-news-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="editTitle">News title *</label>
          <input
            id="editTitle"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="editSlug">URL slug *</label>
          <input
            id="editSlug"
            name="slug"
            type="text"
            value={formData.slug}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="editSummary">Summary *</label>
          <textarea
            id="editSummary"
            name="summary"
            rows="3"
            value={formData.summary}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="editContent">
            Complete article *
          </label>
          <textarea
            id="editContent"
            name="content"
            rows="12"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>

        <div className="admin-form-grid">
          <div className="form-group">
            <label htmlFor="editCategory">Category</label>
            <select
              id="editCategory"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Community">Community</option>
              <option value="Rights">Rights</option>
              <option value="Environment">
                Environment
              </option>
              <option value="Membership">Membership</option>
              <option value="Culture">Culture</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="editAuthor">Author</label>
            <input
              id="editAuthor"
              name="author"
              type="text"
              value={formData.author}
              onChange={handleChange}
            />
          </div>
        </div>

        {formData.image_url && (
          <div className="admin-current-image">
            <span>Current image</span>
            <img
              src={formData.image_url}
              alt={formData.title}
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="editImage">
            Replace image
          </label>
          <input
            id="editImage"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={(event) =>
              setNewImage(event.target.files?.[0] || null)
            }
          />
        </div>

        <div className="admin-checkboxes">
          <label className="checkbox-group">
            <input
              name="featured"
              type="checkbox"
              checked={formData.featured}
              onChange={handleChange}
            />
            Featured news
          </label>

          <label className="checkbox-group">
            <input
              name="published"
              type="checkbox"
              checked={formData.published}
              onChange={handleChange}
            />
            Published
          </label>
        </div>

        <div className="admin-form-actions">
          <button
            type="button"
            className="button button-secondary"
            onClick={() => navigate("/admin/news")}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="button button-primary"
            disabled={submitting}
          >
            <FaSave />
            {submitting ? "Updating..." : "Update News"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditNews;