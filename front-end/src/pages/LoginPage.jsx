import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUser, FaLock, FaGoogle } from "react-icons/fa";
import "./Login.css";
import StayCleanLogo from '../assets/Screenshot 2025-06-30 014942.png';

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

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
        setMessage("✅ " + data.message);

        if (data.success === true) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));

          // Lấy role và chuyển hướng
          const userRole = (data.role || '').toUpperCase();
          console.log("LoginPage userRole:", userRole);

          if (userRole === " STAFF ") {
            navigate("/staff");
          } else if (userRole === "ADMIN") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        }
      } else {
        const errorText = await response.text();
        setMessage("❌ " + errorText);
      }
    } catch {
      setMessage("❌ Server error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="auth-overlay"></div>
      </div>

      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <img src={StayCleanLogo} alt="Stay Clean Logo" className="logo-icon" style={{ width: 48, height: 48 }} />
            <h1>Stay Clean</h1>
          </div>
          <h2>Welcome Back</h2>
          <p>Sign in to continue your wellness journey</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-wrapper">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="auth-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="auth-input"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {message && (
            <div className={`message-box ${message.startsWith("✅") ? "success" : "error"}`}>
              {message}
            </div>
          )}

          <div className="form-options">
            <label className="checkbox-wrapper">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-link">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className={`auth-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="spinner"></div>
            ) : (
              "Sign In"
            )}
          </button>

          <div className="divider">
            <span>or continue with Google</span>
          </div>

          <div className="social-buttons">
            <button type="button" className="social-button google">
              <FaGoogle />
              <span>Google</span>
            </button>
          </div>

          <div className="auth-footer">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="auth-link">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
