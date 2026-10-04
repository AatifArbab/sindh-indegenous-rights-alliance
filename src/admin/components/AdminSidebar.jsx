import { NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaHome,
  FaNewspaper,
  FaPlusCircle,
  FaTachometerAlt,
  FaTimes,
  FaUsers,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    name: "Manage News",
    path: "/admin/news",
    icon: <FaNewspaper />,
  },
  {
    name: "Add News",
    path: "/admin/news/add",
    icon: <FaPlusCircle />,
  },
  {
    name: "Contact Messages",
    path: "/admin/messages",
    icon: <FaEnvelope />,
  },
  {
    name: "Memberships",
    path: "/admin/memberships",
    icon: <FaUsers />,
  },
];

const AdminSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="admin-sidebar-overlay"
          onClick={onClose}
          aria-label="Close admin menu"
        />
      )}

      <aside
        className={`admin-sidebar ${
          isOpen ? "admin-sidebar-open" : ""
        }`}
      >
        <div className="admin-sidebar-brand">
          <div className="admin-brand-logo">SIRA</div>

          <div>
            <strong>SIRA Admin</strong>
            <span>Management Panel</span>
          </div>

          <button
            type="button"
            className="admin-sidebar-close"
            onClick={onClose}
            aria-label="Close admin menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="admin-navigation">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                isActive
                  ? "admin-nav-link active"
                  : "admin-nav-link"
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <NavLink to="/" className="admin-view-website">
            <FaHome />
            View Website
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;