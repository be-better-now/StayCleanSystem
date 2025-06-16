import React, {useState} from "react";
import "./Login.css"; // Adjust the path as needed
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setMessage(data.message);
      if (data.success == true){
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      }
    } else {
      const errorText = await response.text();
      setMessage("❌ " + errorText);
    }
  } catch {
    setMessage("❌ Server error. Please try again.");
  }
};

    return (
      <div style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <div style={{ width: "100%", maxWidth: 560, margin: "48px auto 0 auto" }}>
          <h2 style={{
            textAlign: "center",
            fontWeight: 700,
            marginBottom: 32,
            letterSpacing: 1,
            fontSize: 32
          }}>LOGIN</h2>
          <form className="form" style={{ display: "flex", flexDirection: "column", gap: 24, width: '100%' }} onSubmit={handleSubmit} autoComplete="off">
            <input type="text" placeholder="Enter your username" style={inputStyle} value={userName} onChange={e => setUserName(e.target.value)} required />
            <input type="password" placeholder="Enter your password" style={inputStyle} value={password} onChange={e => setPassword(e.target.value)} required />
            {message && (
              <div className="message-box" style={{ textAlign: "center", margin: "8px 0", color: message.startsWith("✅") ? "green" : "red" }}>
                {message}
              </div>
            )}
            <button type="submit" style={buttonStyle}>LOGIN</button>
            <div className="form-options" style={{ textAlign: 'right', marginTop: 8 }}>
              <a href="#" style={{ fontSize: 20, fontWeight: 500 }}>Forgot password?</a>
            </div>
            <p
              className="signup-text"
              style={{ textAlign: "center", marginTop: 16, fontSize: 20, fontWeight: 500 }}
            >
              Don't have an account? <Link to="/register" style={{ color: '#1667d9', fontWeight: 600, fontSize: 20, textDecoration: 'underline' }}>Sign up</Link>
            </p>
          </form>
        </div>
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
  letterSpacing: 1,
  width: '100%'
};

export default LoginPage;
