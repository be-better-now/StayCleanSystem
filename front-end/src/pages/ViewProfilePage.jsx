import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Login.css"; // reuse styles

function ViewProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>👤 Profile</h2>
        <p>No user data found. Please log in.</p>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f7fa",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{ width: "100%", maxWidth: 560, margin: "48px auto 0 auto" }}>
        <h2 style={{
          textAlign: "center",
          fontWeight: 700,
          marginBottom: 32,
          letterSpacing: 1,
          fontSize: 32
        }}>YOUR PROFILE</h2>
        <form className="form" style={{ display: "flex", flexDirection: "column", gap: 24, width: '100%' }}>
          <input type="text" value={user.firstName || ''} style={inputStyle} readOnly />
          <input type="text" value={user.lastName || ''} style={inputStyle} readOnly />
          <input type="text" value={user.username || ''} style={inputStyle} readOnly />
          <input type="email" value={user.email || ''} style={inputStyle} readOnly />
          
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', fontSize: 18, margin: '8px 0 8px 0', color: '#222', marginLeft: 12 }}>
            <span style={{ minWidth: 90, fontWeight: 500, color: '#222', marginRight: 18 }}>Gender:</span>
            <span>{user.sex || 'N/A'}</span>
          </div>

          <div style={{ width: '100%' }}>
            <DatePicker
              selected={user.birth ? new Date(user.birth) : null}
              dateFormat="yyyy-MM-dd"
              placeholderText="Birth date"
              className="form-control"
              style={inputStyle}
              readOnly
              disabled
            />
          </div>

          <button
            type="button"
            onClick={() => window.location.href = "/edit-profile"}
            style={{ ...buttonStyle, width: '100%' }}
          >
            EDIT PROFILE
          </button>
        </form>
      </div>
      <style>{`
        input::placeholder {
          color: #222 !important;
          opacity: 1;
        }
        .form-control::placeholder {
          color: #222 !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px 22px",
  border: "1.5px solid #dbeafe",
  borderRadius: 10,
  background: "#fff",
  fontSize: 18,
  marginBottom: 0,
  boxSizing: "border-box",
  color: "#222"
};

const buttonStyle = {
  marginTop: 16,
  padding: "16px 0",
  background: "#1667d9",
  color: "#fff",
  border: "none",
  borderRadius: 10,
  fontWeight: 700,
  fontSize: 18,
  cursor: "pointer",
  letterSpacing: 1
};

export default ViewProfilePage;
