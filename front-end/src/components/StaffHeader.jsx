import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShieldAlt, FaSearch, FaRegBell, FaPlus, FaUserCircle, FaChevronDown } from "react-icons/fa";
import "./StaffHeader.css";

const StaffHeader = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const welcomeBoxRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const staffName = user?.fullName
    ? user.fullName
    : (user?.firstName || "") + (user?.lastName ? " " + user.lastName : "");
  const displayName = staffName.trim() || "Staff";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (welcomeBoxRef.current && !welcomeBoxRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [welcomeBoxRef]);

  return (
    <div className="staff-header-container">
      <header className="staff-header-top-row">
        <div className="header-left">
          <Link to="/staff" className="navbar-brand d-flex align-items-center gap-2">
            <span className="logo-circle"></span>
            <span className="fw-bold fs-3 text-primary">Stay Clean</span>
          </Link>
        </div>
        <div className="header-right">
          <div className="header-actions">
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search..." />
            </div>
            <button className="action-btn notification-btn">
              <FaRegBell />
              <span className="notification-badge">3</span>
            </button>
            <button className="action-btn add-btn">
              <FaPlus />
            </button>
          </div>
          {/* Welcome Box with Dropdown */}
          <div ref={welcomeBoxRef} className="welcome-box-area">
            <button className="welcome-box-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FaUserCircle className="welcome-avatar" />
              <div className="welcome-text">
                <span>Welcome</span>
                <strong>{displayName}</strong>
              </div>
              <FaChevronDown className={`chevron-icon ${isMenuOpen ? 'open' : ''}`} />
            </button>
            {isMenuOpen && (
              <div className="dropdown-menu">
                <Link to="/staff/profile" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                  My Profile
                </Link>
                <button onClick={handleLogout} className="dropdown-item">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default StaffHeader; 