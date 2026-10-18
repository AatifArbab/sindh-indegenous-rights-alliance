import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle";

/* Put young.jpeg, picture.jpeg and picture1.jpeg inside the /public folder.
   The titles, tags and text below are placeholders: edit them with your real news. */
const latestNews = [
  {
    id: "young",
    tag: "Youth",
    title: "Young Voices Leading Community Change",
    excerpt:
      "Young members are taking an active role in awareness, advocacy and community work across Sindh.",
    image: "/young.jpeg",
  },
  {
    id: "picture",
    tag: "Campaign",
    title: "Standing Together for Community Rights",
    excerpt:
      "Communities, volunteers and partners come together to raise their voice for dignity and justice.",
    image: "/picture.jpeg",
  },
  {
    id: "picture1",
    tag: "Community",
    title: "Stories from the Community",
    excerpt:
      "A look at our recent activities, gatherings and the everyday achievements of our communities.",
    image: "/picture1.jpeg",
  },
];

const styles = `
.latest-news-section {
  --news-primary: #0f3d2e;
  --news-accent: #c8a24a;
  --news-text: #4a5563;
  --news-radius: 18px;
}

.news-grid-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 48px;
}

.news-card-item {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: var(--news-radius);
  overflow: hidden;
  border: 1px solid rgba(15, 30, 45, 0.06);
  box-shadow: 0 4px 18px rgba(15, 30, 45, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.news-card-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 36px rgba(15, 30, 45, 0.18);
}

.news-card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #e6e2d6;
}
.news-card-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transition: transform 0.6s ease;
}
.news-card-item:hover .news-card-image img {
  transform: scale(1.07);
}
.news-card-image::after {
  content: "";
  position: absolute;
  inset: 55% 0 0 0;
  background: linear-gradient(to top, rgba(15, 30, 45, 0.4), transparent);
  pointer-events: none;
}

.news-card-tag {
  position: absolute;
  z-index: 1;
  top: 16px;
  left: 16px;
  padding: 6px 14px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--news-primary);
  background: var(--news-accent);
  border-radius: 999px;
}

.news-card-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, var(--news-primary), #1f6b52);
}

.news-card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px 24px 26px;
}
.news-card-title {
  margin: 0 0 10px;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.4;
  color: #1c2430;
}
.news-card-excerpt {
  margin: 0 0 18px;
  font-size: 0.96rem;
  line-height: 1.7;
  color: var(--news-text);
}
.news-card-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--news-primary);
  text-decoration: none;
}
.news-card-link svg { transition: transform 0.25s ease; }
.news-card-item:hover .news-card-link svg { transform: translateX(5px); }

.latest-news-section .section-action {
  display: flex;
  justify-content: center;
  margin-top: 48px;
}
.latest-news-section .section-action .button svg {
  margin-left: 8px;
  transition: transform 0.25s ease;
}
.latest-news-section .section-action .button:hover svg {
  transform: translateX(4px);
}

@media (max-width: 992px) {
  .news-grid-wrap { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .news-grid-wrap { grid-template-columns: 1fr; gap: 22px; }
}
`;

const NewsItem = ({ news }) => {
  const [failed, setFailed] = useState(false);

  return (
    <article className="news-card-item">
      <div className="news-card-image">
        {failed ? (
          <div className="news-card-fallback">{news.tag}</div>
        ) : (
          <img
            src={news.image}
            alt={news.title}
            width="640"
            height="400"
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
        <span className="news-card-tag">{news.tag}</span>
      </div>

      <div className="news-card-body">
        <h3 className="news-card-title">{news.title}</h3>
        <p className="news-card-excerpt">{news.excerpt}</p>
        <Link to="/news" className="news-card-link">
          Read more
          <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

const LatestNews = () => {
  return (
    <section className="latest-news-section section-padding">
      <style>{styles}</style>

      <div className="container">
        <SectionTitle
          label="Latest Updates"
          title="News and Community Stories"
          description="Stay informed about our activities, campaigns and community achievements."
          alignment="center"
        />

        <div className="news-grid-wrap">
          {latestNews.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </div>

        <div className="section-action">
          <Link to="/news" className="button button-secondary">
            View All News
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;