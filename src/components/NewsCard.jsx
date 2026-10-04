import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const NewsCard = ({
  title,
  summary,
  image,
  date,
  category = "News",
  slug,
}) => {
  return (
    <article className="news-card">
      <Link
        to={`/news/${slug}`}
        className="news-image-wrapper"
        aria-label={`Read ${title}`}
      >
        <img
          src={image}
          alt={title}
          className="news-image"
          loading="lazy"
        />

        <span className="news-category">{category}</span>
      </Link>

      <div className="news-card-content">
        <div className="news-date">
          <FaCalendarAlt aria-hidden="true" />
          <time>{date}</time>
        </div>

        <h3>
          <Link to={`/news/${slug}`}>{title}</Link>
        </h3>

        <p>{summary}</p>

        <Link to={`/news/${slug}`} className="read-more-link">
          Read full story
          <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;