import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

import { getNewsBySlug } from "../data/newsData";

const NewsDetail = () => {
  const { slug } = useParams();

  const article = getNewsBySlug(slug);

  if (!article) {
    return (
      <section className="article-not-found section-padding">
        <div className="container">
          <h1>News Article Not Found</h1>

          <p>
            The article may have been removed or the link is incorrect.
          </p>

          <Link to="/news" className="button button-primary">
            <FaArrowLeft />
            Back to News
          </Link>
        </div>
      </section>
    );
  }

  const pageUrl = window.location.href;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `${article.title} ${pageUrl}`
  )}`;

  const facebookUrl =
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      pageUrl
    )}`;

  return (
    <>
      <section className="article-header">
        <div className="container article-header-content">
          <Link to="/news" className="back-link">
            <FaArrowLeft />
            Back to News
          </Link>

          <span className="article-category">
            {article.category}
          </span>

          <h1>{article.title}</h1>

          <div className="article-meta">
            <div className="article-date">
              <FaCalendarAlt />
              <time>{article.date}</time>
            </div>

            {article.author && (
              <span className="article-author">
                By {article.author}
              </span>
            )}
          </div>
        </div>
      </section>

      <article className="article-page section-padding">
        <div className="container article-container">
          <img
            src={article.image}
            alt={article.title}
            className="article-featured-image"
          />

          <div className="article-content">
            {article.content.map((paragraph, index) => (
              <p key={`${article.id}-${index}`}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="article-share">
            <strong>Share this story:</strong>

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share this article on Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share this article on WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>

          <div className="article-bottom-navigation">
            <Link to="/news" className="button button-secondary">
              <FaArrowLeft />
              View All News
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default NewsDetail;