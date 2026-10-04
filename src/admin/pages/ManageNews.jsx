import { useEffect, useMemo, useState } from "react";import {
  FaEdit,
  FaFileAlt,
  FaEye,
  FaPlus,
  FaRegStar,
  FaSearch,
  FaStar,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import LoadingSpinner from "../../components/LoadingSpinner";
import {
  deleteNews,
  getAllNewsForAdmin,
} from "../../services/newsService";
import { deleteNewsImage } from "../../services/storageService";

const ManageNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

useEffect(() => {
  let isMounted = true;

  const loadNews = async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      const result = await getAllNewsForAdmin();

      if (isMounted) {
        setNews(Array.isArray(result) ? result : []);
      }
    } catch (error) {
      console.error("ManageNews load error:", error);

      if (isMounted) {
        setErrorMessage(
          error?.message || "News load nahi ho saki."
        );
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  };

  loadNews();

  return () => {
    isMounted = false;
  };
}, []);

  // Handle Delete with Image Cleanup Optimization
  const handleDelete = async (article) => {
    const confirmed = window.confirm(
      `Kya aap "${article.title}" delete karna chahte hain?\n\nYeh action undo nahi ho sakta.`
    );

    if (!confirmed) return;

    try {
      setDeletingId(article.id);
      setErrorMessage("");

      // 1. Delete record from Supabase Database
      await deleteNews(article.id);

      // 2. Cleanup unused image from Supabase Storage Bucket
      if (article.image_url) {
        try {
          const fileName = article.image_url.split("/").pop();
          if (fileName) {
            await deleteNewsImage(fileName);
          }
        } catch (imgErr) {
          console.warn("Storage image cleanup warning:", imgErr);
        }
      }

      // 3. Update local state
      setNews((current) =>
        current.filter((item) => item.id !== article.id)
      );
    } catch (error) {
      console.error("Delete news error:", error);
      setErrorMessage(
        error?.message || "News delete nahi ho saki."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // Search and Status Filter (Supports both summary and excerpt)
  const filteredNews = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return news.filter((article) => {
      const summaryText = article.summary || article.excerpt || "";

      const matchesSearch =
        !search ||
        article.title?.toLowerCase().includes(search) ||
        article.category?.toLowerCase().includes(search) ||
        summaryText.toLowerCase().includes(search) ||
        article.content?.toLowerCase().includes(search);

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "published" && article.published) ||
        (statusFilter === "draft" && !article.published) ||
        (statusFilter === "featured" && article.featured);

      return matchesSearch && matchesStatus;
    });
  }, [news, searchTerm, statusFilter]);

  // Article statistics calculation
  const stats = useMemo(() => {
    return news.reduce(
      (acc, article) => {
        acc.total++;
        if (article.published) acc.published++;
        else acc.draft++;
        if (article.featured) acc.featured++;
        return acc;
      },
      { total: 0, published: 0, draft: 0, featured: 0 }
    );
  }, [news]);

  const formatDate = (date) => {
    if (!date) return "—";
    const parsedDate = new Date(date);
    if (Number.isNaN(parsedDate.getTime())) return "—";

    return parsedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return <LoadingSpinner message="Loading news articles..." />;
  }

  return (
    <section className="admin-news-page">
      {/* Page Header */}
      <div className="admin-page-heading">
        <div>
          <div className="admin-heading-icon">
            <FaFileAlt />
          </div>
          <h2>Manage News</h2>
          <p>Published aur draft articles ko manage karein.</p>
        </div>

        <Link to="/admin/news/add" className="button button-primary">
          <FaPlus />
          Add New Article
        </Link>
      </div>

      {/* Error Alert */}
      {errorMessage && (
        <div className="admin-alert admin-alert-error">
          {errorMessage}
        </div>
      )}

      {/* Statistics Header */}
      <div className="admin-news-stats">
        <button
          type="button"
          className={`admin-news-stat-card ${statusFilter === "all" ? "active" : ""}`}
          onClick={() => setStatusFilter("all")}
        >
          <div className="admin-news-stat-icon">
            <FaFileAlt />
          </div>
          <div>
            <span>Total Articles</span>
            <strong>{stats.total}</strong>
          </div>
        </button>

        <button
          type="button"
          className={`admin-news-stat-card ${statusFilter === "published" ? "active" : ""}`}
          onClick={() => setStatusFilter("published")}
        >
          <div className="admin-news-stat-icon">
            <FaEye />
          </div>
          <div>
            <span>Published</span>
            <strong>{stats.published}</strong>
          </div>
        </button>

        <button
          type="button"
          className={`admin-news-stat-card ${statusFilter === "draft" ? "active" : ""}`}
          onClick={() => setStatusFilter("draft")}
        >
          <div className="admin-news-stat-icon">
            <FaFileAlt />
          </div>
          <div>
            <span>Drafts</span>
            <strong>{stats.draft}</strong>
          </div>
        </button>

        <button
          type="button"
          className={`admin-news-stat-card ${statusFilter === "featured" ? "active" : ""}`}
          onClick={() => setStatusFilter("featured")}
        >
          <div className="admin-news-stat-icon">
            <FaStar />
          </div>
          <div>
            <span>Featured</span>
            <strong>{stats.featured}</strong>
          </div>
        </button>
      </div>

      {/* Toolbar */}
      {news.length > 0 && (
        <div className="admin-news-toolbar">
          <div className="admin-search-box">
            <FaSearch />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="admin-news-filter"
          >
            <option value="all">All Articles</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="featured">Featured</option>
          </select>
        </div>
      )}

      {/* Main Table or Empty View */}
      {news.length === 0 ? (
        <div className="admin-empty-state">
          <div className="admin-empty-icon">
            <FaFileAlt />
          </div>
          <h3>No news articles found</h3>
          <p>
            Abhi koi article available nahi hai. Apna pehla news article add karein.
          </p>
          <Link to="/admin/news/add" className="button button-primary">
            <FaPlus />
            Add New Article
          </Link>
        </div>
      ) : filteredNews.length === 0 ? (
        <div className="admin-empty-state">
          <div className="admin-empty-icon">
            <FaSearch />
          </div>
          <h3>No matching articles</h3>
          <p>Search ya selected filter ke mutabiq koi article nahi mila.</p>
          <button
            type="button"
            className="button button-secondary"
            onClick={() => {
              setSearchTerm("");
              setStatusFilter("all");
            }}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Article</th>
                <th>Category</th>
                <th>Status</th>
                <th>Featured</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredNews.map((article) => {
                const summaryText = article.summary || article.excerpt;

                return (
                  <tr key={article.id}>
                    <td>
                      <div className="admin-news-title">
                        {article.image_url ? (
                          <img
                            src={article.image_url}
                            alt={article.title || "News"}
                          />
                        ) : (
                          <div className="admin-image-placeholder">
                            <FaFileAlt />
                          </div>
                        )}

                        <div className="admin-news-title-content">
                          <strong>
                            {article.title || "Untitled Article"}
                          </strong>
                          {summaryText && <p>{summaryText}</p>}
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="admin-category">
                        {article.category || "General"}
                      </span>
                    </td>

                    <td>
                      <span
                        className={
                          article.published
                            ? "admin-status published"
                            : "admin-status draft"
                        }
                      >
                        {article.published ? "Published" : "Draft"}
                      </span>
                    </td>

                    <td>
                      <span
                        className={
                          article.featured
                            ? "admin-featured yes"
                            : "admin-featured no"
                        }
                      >
                        {article.featured ? (
                          <>
                            <FaStar /> Yes
                          </>
                        ) : (
                          <>
                            <FaRegStar /> No
                          </>
                        )}
                      </span>
                    </td>

                    <td>
                      <span className="admin-date">
                        {formatDate(article.created_at)}
                      </span>
                    </td>

                    <td>
                      <div className="admin-table-actions">
                        <Link
                          to={`/admin/news/edit/${article.id}`}
                          className="admin-edit-button"
                          aria-label={`Edit ${article.title || "article"}`}
                          title="Edit Article"
                        >
                          <FaEdit />
                        </Link>

                        <button
                          type="button"
                          className="admin-delete-button"
                          onClick={() => handleDelete(article)}
                          disabled={deletingId === article.id}
                          aria-label={`Delete ${article.title || "article"}`}
                          title="Delete Article"
                        >
                          {deletingId === article.id ? "..." : <FaTrash />}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Result Count */}
      {news.length > 0 && filteredNews.length > 0 && (
        <div className="admin-news-result-count">
          Showing <strong>{filteredNews.length}</strong> of{" "}
          <strong>{news.length}</strong> articles
        </div>
      )}
    </section>
  );
};

export default ManageNews;