import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const userBoxRef = useRef(null);

  // Get user info from localStorage
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Đóng menu khi click ra ngoài
  React.useEffect(() => {
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
          <div ref={userBoxRef} style={{position: 'relative'}}>
            <div
              style={{background: 'rgba(0,0,0,0.12)', borderRadius: 8, padding: '4px 10px', color: '#fff', display: 'flex', alignItems: 'center', minWidth: 80, cursor: 'pointer'}}
              onClick={() => setShowMenu(v => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{marginRight: 6}}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg>
              <div style={{display: 'flex', flexDirection: 'column', lineHeight: 1.1}}>
                <span style={{fontWeight: 500, fontSize: 13}}>Xin chào</span>
                <span style={{fontWeight: 600, fontSize: 13}}>{user ? (user.fullName || ((user.firstName || "") + " " + (user.lastName || "")).trim() || user.username) : "User"}</span>
              </div>
              <svg width="16" height="16" style={{marginLeft: 6}} fill="#fff" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z"/></svg>
            </div>
            {showMenu && (
              <div style={{background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.12)', minWidth: 220, padding: '10px 0', zIndex: 1000, position: 'absolute', right: 0, top: '110%'}}>
                <div style={{display: 'flex', alignItems: 'center', fontWeight: 700, fontSize: 16, padding: '10px 20px 12px 20px', borderBottom: '1px solid #eee'}}>
                  <span style={{fontSize: 22, marginRight: 10}}>👋</span>
                  <span>
                    Hello, <span style={{fontWeight: 800}}>{user ? (user.fullName || ((user.firstName || "") + " " + (user.lastName || "")).trim() || user.username) : "User"}</span>
                  </span>
                </div>
                <div style={{padding: '12px 20px', display: 'flex', alignItems: 'center', cursor: 'pointer', borderBottom: '1px solid #eee'}} onClick={() => { setShowMenu(false); navigate('/account'); }}>
                  <span style={{fontSize: 18, marginRight: 12}}>🛠️</span>
                  <span>Manage Account</span>
                </div>
                <div style={{padding: '12px 20px', display: 'flex', alignItems: 'center', cursor: 'pointer', borderBottom: '1px solid #eee'}} onClick={() => { setShowMenu(false); navigate('/view-profile'); }}>
                  <span style={{fontSize: 18, marginRight: 12}}>🛠️</span>
                  <span>View Profile</span>
                </div>
                <div style={{padding: '12px 20px', display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => { setShowMenu(false); handleLogout(); }}>
                  <span style={{fontSize: 18, marginRight: 12}}>🚪</span>
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
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
