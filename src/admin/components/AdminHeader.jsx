import { FaBars, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

import { useAuth } from "../../context/useAuth";
import { logoutAdmin } from "../../services/authService";

const AdminHeader = ({ onMenuToggle }) => {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutAdmin();
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout nahi ho saka.");
    }
  };

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <button
          type="button"
          className="admin-menu-button"
          onClick={onMenuToggle}
          aria-label="Open menu"
        >
          <FaBars />
        </button>

        <div className="admin-header-title">
          <h1>Admin Panel</h1>
          <p>Manage your organization website</p>
        </div>
      </div>

      <div className="admin-header-right">
        <div className="admin-user-info">
          <FaUserCircle />

          <div>
            <strong>
              {user?.email || "Admin"}
            </strong>
            <span>Administrator</span>
          </div>
        </div>

        <button
          type="button"
          className="admin-logout-button"
          onClick={handleLogout}
          title="Logout"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;