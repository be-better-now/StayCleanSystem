import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  FaSearch, 
  FaUser, 
  FaCog, 
  FaSignOutAlt, 
  FaBars, 
  FaTimes,
  FaBell,
  FaEnvelope
} from "react-icons/fa";
import "./Header.css";
import ShieldLogo from "../assets/shield-logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const userBoxRef = useRef(null);

  // Get user info from localStorage
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userBoxRef.current && !userBoxRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    setShowMenu(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const getUserDisplayName = () => {
    if (!user) return "User";
    if (user.fullName) return user.fullName;
    const firstName = user.firstName || "";
    const lastName = user.lastName || "";
    const fullName = (firstName + " " + lastName).trim();
    return fullName || user.username || "User";
  };

  return (
    <header className="header-modern">
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" className="logo-link">
            <img src={ShieldLogo} alt="Stay Clean Logo" className="logo-modern" />
            <span className="site-title-modern">Stay Clean</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-menu-modern">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          <Link to="/courses" className={`nav-link ${isActive("/courses") ? "active" : ""}`}>
            Courses
          </Link>
          <Link to="/programs" className={`nav-link ${isActive("/programs") ? "active" : ""}`}>
            Programs
          </Link>
          <Link to="/blog" className={`nav-link ${isActive("/blog") ? "active" : ""}`}>
            Blog
          </Link>
          <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
            About
          </Link>
        </nav>

        <div className="header-right">
          {/* Search Bar */}
          <form className="header-search-modern" onSubmit={handleSearch}>
            <div className={`search-wrapper ${isSearchFocused ? "focused" : ""}`}>
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search courses, programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() => setSearchQuery("")}
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </form>

          <div className="header-actions-modern">
            {token ? (
              <>
                {/* Notifications */}
                <button className="header-icon-btn" title="Notifications">
                  <FaBell />
                  <span className="notification-badge">3</span>
                </button>

                {/* Messages */}
                <button className="header-icon-btn" title="Messages">
                  <FaEnvelope />
                  <span className="notification-badge">1</span>
                </button>

                {/* User Profile */}
                <div ref={userBoxRef} className="user-profile-modern">
                  <div className="user-avatar">
                    <FaUser />
                  </div>
                  <div className="user-info">
                    <span className="user-name-modern">{getUserDisplayName()}</span>
                    <span className="user-role">Learner</span>
                  </div>
                  <button
                    className="dropdown-toggle"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <FaTimes className={`dropdown-icon ${showMenu ? "rotated" : ""}`} />
                  </button>
                  
                  {showMenu && (
                    <div className="user-dropdown-modern">
                      <div className="dropdown-header">
                        <div className="dropdown-avatar">
                          <FaUser />
                        </div>
                        <div className="dropdown-user-info">
                          <span className="dropdown-name">{getUserDisplayName()}</span>
                          <span className="dropdown-email">{user?.email || "user@example.com"}</span>
                        </div>
                      </div>
                      <div className="dropdown-divider"></div>
                      <Link to="/view-profile" onClick={() => setShowMenu(false)} className="dropdown-item">
                        <FaUser />
                        <span>View Profile</span>
                      </Link>
                      <Link to="/account" onClick={() => setShowMenu(false)} className="dropdown-item">
                        <FaCog />
                        <span>Account Settings</span>
                      </Link>
                      <div className="dropdown-divider"></div>
                      <button onClick={handleLogout} className="dropdown-item logout">
                        <FaSignOutAlt />
                        <span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn-modern btn-login">Login</button>
                </Link>
                <Link to="/register">
                  <button className="btn-modern btn-signup">Sign Up</button>
                </Link>
              </>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {showMobileMenu && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <Link to="/" className={`mobile-nav-link ${isActive("/") ? "active" : ""}`} onClick={() => setShowMobileMenu(false)}>
              Home
            </Link>
            <Link to="/courses" className={`mobile-nav-link ${isActive("/courses") ? "active" : ""}`} onClick={() => setShowMobileMenu(false)}>
              Courses
            </Link>
            <Link to="/programs" className={`mobile-nav-link ${isActive("/programs") ? "active" : ""}`} onClick={() => setShowMobileMenu(false)}>
              Programs
            </Link>
            <Link to="/blog" className={`mobile-nav-link ${isActive("/blog") ? "active" : ""}`} onClick={() => setShowMobileMenu(false)}>
              Blog
            </Link>
            <Link to="/about" className={`mobile-nav-link ${isActive("/about") ? "active" : ""}`} onClick={() => setShowMobileMenu(false)}>
              About
            </Link>
          </nav>
          
          {!token && (
            <div className="mobile-auth">
              <Link to="/login" onClick={() => setShowMobileMenu(false)}>
                <button className="btn-modern btn-login">Login</button>
              </Link>
              <Link to="/register" onClick={() => setShowMobileMenu(false)}>
                <button className="btn-modern btn-signup">Sign Up</button>
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
