import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHome } from "react-icons/fa";

const NotFoundPage = () => (
  <section style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
    <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 4px 32px 0 rgba(30,41,59,0.10)', padding: '56px 40px', maxWidth: 420, width: '100%', textAlign: 'center' }}>
      <div style={{ fontSize: 80, color: '#2563eb', marginBottom: 12 }}>
        <FaSearch />
      </div>
      <div style={{ fontWeight: 900, fontSize: 64, color: '#2563eb', letterSpacing: 2, marginBottom: 8 }}>404</div>
      <h2 style={{ fontWeight: 700, fontSize: 28, color: '#1e293b', marginBottom: 12 }}>Oops! Page Not Found</h2>
      <p style={{ color: '#64748b', fontSize: 18, marginBottom: 32, lineHeight: 1.6 }}>
        Sorry, we couldn't find the page you're looking for.<br />
        It might have been removed, renamed, or never existed.
      </p>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#2563eb', color: '#fff', fontWeight: 700, fontSize: 18, borderRadius: 12, padding: '12px 32px', textDecoration: 'none', boxShadow: '0 2px 8px rgba(37,99,235,0.10)', transition: 'background 0.2s' }}>
        <FaHome /> Back to Home
      </Link>
    </div>
  </section>
);

export default NotFoundPage;
