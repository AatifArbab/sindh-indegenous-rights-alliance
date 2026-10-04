import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaNewspaper,
  FaRegFileAlt,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import LoadingSpinner from "../../components/LoadingSpinner";
import { getAllNewsForAdmin } from "../../services/newsService";
import { getContactMessages } from "../../services/contactService";
import { getMembershipApplications } from "../../services/membershipService";

const initialStatistics = {
  totalNews: 0,
  publishedNews: 0,
  draftNews: 0,
  newMessages: 0,
  pendingMemberships: 0,
};

const Dashboard = () => {
  const [statistics, setStatistics] = useState(initialStatistics);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);
        setErrorMessage("");

        const [news, messages, memberships] = await Promise.all([
          getAllNewsForAdmin(),
          getContactMessages(),
          getMembershipApplications(),
        ]);

        setStatistics({
          totalNews: news.length,

          publishedNews: news.filter(
            (item) => item.published === true
          ).length,

          draftNews: news.filter(
            (item) => item.published !== true
          ).length,

          newMessages: messages.filter(
            (item) => item.status === "new"
          ).length,

          pendingMemberships: memberships.filter(
            (item) => item.status === "pending"
          ).length,
        });
      } catch (error) {
        console.error("DASHBOARD ERROR:", error);

        setErrorMessage(
          error?.message ||
            "Dashboard data load nahi ho saka."
        );
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return <LoadingSpinner message="Loading dashboard..." />;
  }

  return (
    <section className="admin-dashboard">
      {/* Page Heading */}
      <div className="admin-page-heading">
        <div>
          <h2>Dashboard Overview</h2>

          <p>
            Welcome back. Yahan se website content manage karein.
          </p>
        </div>

        <Link
          to="/admin/news/add"
          className="button button-primary"
        >
          Add New Article
        </Link>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="admin-alert admin-alert-error">
          {errorMessage}
        </div>
      )}

      {/* Statistics */}
      <div className="admin-statistics-grid">
        {/* Total News */}
        <article className="admin-stat-card">
          <div className="admin-stat-icon">
            <FaNewspaper />
          </div>

          <div>
            <span>Total News</span>
            <strong>{statistics.totalNews}</strong>
          </div>
        </article>

        {/* Published / Draft */}
        <article className="admin-stat-card">
          <div className="admin-stat-icon">
            <FaRegFileAlt />
          </div>

          <div>
            <span>Published / Draft</span>

            <strong>
              {statistics.publishedNews} /{" "}
              {statistics.draftNews}
            </strong>
          </div>
        </article>

        {/* New Messages */}
        <article className="admin-stat-card">
          <div className="admin-stat-icon">
            <FaEnvelope />
          </div>

          <div>
            <span>New Messages</span>

            <strong>{statistics.newMessages}</strong>
          </div>
        </article>

        {/* Pending Memberships */}
        <article className="admin-stat-card">
          <div className="admin-stat-icon">
            <FaUsers />
          </div>

          <div>
            <span>Pending Memberships</span>

            <strong>
              {statistics.pendingMemberships}
            </strong>
          </div>
        </article>
      </div>

      {/* Quick Actions */}
      <div className="admin-quick-actions">
        <h3>Quick Actions</h3>

        <div className="admin-action-grid">
          <Link to="/admin/news/add">
            Add a new article
          </Link>

          <Link to="/admin/news">
            Manage existing news
          </Link>

          <Link to="/admin/messages">
            Read contact messages
          </Link>

          <Link to="/admin/memberships">
            Review memberships
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;