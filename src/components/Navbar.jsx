import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Archive", path: "/archive" },
  { name: "Indigenous", path: "/indigenous" },
  { name: "News", path: "/news" },
  { name: "Environment", path: "/environment" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="container navbar-content">
        <Link to="/" className="brand" onClick={closeMenu}>
          <div className="brand-logo">SIRA</div>

          <div className="brand-text">
            <span className="brand-name">
              Sindh Indigenous Rights Alliance
            </span>
            <span className="brand-tagline">
              Rights • Justice • Environment
            </span>
          </div>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          id="main-menu"
          className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}
        >
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/membership"
            className="membership-button"
            onClick={closeMenu}
          >
            Become a Member
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;