import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle";
import NewsCard from "../../components/NewsCard";
import { getFeaturedNews } from "../../data/newsData";

const LatestNews = () => {
  const latestNews = getFeaturedNews();

  return (
    <section className="latest-news-section section-padding">
      <div className="container">
        <SectionTitle
          label="Latest Updates"
          title="News and Community Stories"
          description="Stay informed about our activities, campaigns and community achievements."
        />

        <div className="news-grid">
          {latestNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>

        <div className="section-action">
          <Link to="/news" className="button button-secondary">
            View All News
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;  