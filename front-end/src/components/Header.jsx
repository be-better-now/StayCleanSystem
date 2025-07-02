import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  FaSearch, 
  FaUser, 
  FaCog, 
  FaSignOutAlt, 
  FaBars, 
  FaTimes,
  FaBell
} from "react-icons/fa";
import "./Header.css";
import StayCleanLogo from '../assets/Screenshot 2025-06-30 014942.png';

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
  const user = JSON.parse(localStorage.getItem("user") || "null"); //Nếu "user" chưa tồn tại → getItem(...) trả null → "null" hợp lệ trong JSON.parse, trả ra null chứ không lỗi.
  // Mock notification count - replace with API call later
  const notificationCount = 3; // Set to 0 to hide badge

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
    e.stopPropagation();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsSearchFocused(false);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    // Delay blur to allow for button clicks
    setTimeout(() => {
      setIsSearchFocused(false);
    }, 100);
  };

  const handleClearSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSearchQuery("");
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
            <img src={StayCleanLogo} alt="Stay Clean Logo" className="logo-modern" />
            <span className="site-title-modern">Stay Clean</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-menu-modern">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          <Link to="/courses" className={`nav-link ${isActive("/courses") ? "active" : ""}`}>
            Course
          </Link>
          <Link to="/programs" className={`nav-link ${isActive("/programs") ? "active" : ""}`}>
            Program
          </Link>
          <Link to="/take-survey" className={`nav-link ${isActive("/take-survey") ? "active" : ""}`}>
            Survey
          </Link>
          <Link to="/blog" className={`nav-link ${isActive("/blog") ? "active" : ""}`}>
            Blog
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
                onChange={handleSearchInputChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                className="search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={handleClearSearch}
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
                  {notificationCount > 0 && (
                    <span className="notification-badge">{notificationCount}</span>
                  )}
                </button>

                {/* User Profile */}
                <div ref={userBoxRef} className="user-profile-modern" onClick={() => setShowMenu(!showMenu)} style={{cursor: 'pointer'}}>
                  <div className="user-avatar">
                    <FaUser />
                  </div>
                  <div className="user-info">
                    <span className="user-name-modern">{getUserDisplayName()}</span>
                    <span className="user-role">Learner</span>
                  </div>
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
              Course
            </Link>
            <Link to="/programs" className={`mobile-nav-link ${isActive("/programs") ? "active" : ""}`} onClick={() => setShowMobileMenu(false)}>
              Program
            </Link>
            <Link to="/survey" className={`mobile-nav-link ${isActive("/survey") ? "active" : ""}`} onClick={() => setShowMobileMenu(false)}>
              Survey
            </Link>
            <Link to="/blog" className={`mobile-nav-link ${isActive("/blog") ? "active" : ""}`} onClick={() => setShowMobileMenu(false)}>
              Blog
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
