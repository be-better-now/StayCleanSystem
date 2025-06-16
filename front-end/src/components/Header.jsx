import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  // Get user info from localStorage
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="header-gradient navbar navbar-expand-lg px-4">
      <div className="d-flex align-items-center gap-2">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span className="logo-circle"></span>
          <span className="fw-bold fs-3 text-white">Stay Clean</span>
        </Link>
      </div>
      <ul className="navbar-nav flex-row gap-3 ms-4 align-items-center">
        <li className="nav-item"><Link className="nav-link text-white fw-semibold" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link text-white fw-semibold" to="/courses">Courses</Link></li>
        <li className="nav-item"><Link className="nav-link text-white fw-semibold" to="/programs">Programs</Link></li>
        <li className="nav-item"><Link className="nav-link text-white fw-semibold" to="/blog">Blog</Link></li>
        <li className="nav-item"><Link className="nav-link text-white fw-semibold" to="/about">About</Link></li>
      </ul>
      <form className="d-flex align-items-center ms-auto me-3 search-bar-form" role="search">
        <input className="form-control search-bar-input" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn search-bar-btn" type="submit">
          <svg width="20" height="20" fill="none" stroke="#1667d9" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-3.5-3.5" />
          </svg>
        </button>
      </form>

      <div className="d-flex align-items-center gap-2">
        {token ? (
          <>
            <span className="text-white fw-semibold">Welcome, {user ? `${user.firstName} ${user.lastName}` : "User"}</span>
            <button className="btn btn-light fw-bold px-3" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link text-white fw-semibold">Login</Link>
            <Link to="/register" className="btn btn-light fw-bold px-4">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
