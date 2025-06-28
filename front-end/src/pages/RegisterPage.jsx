import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { validateUserForm } from "../utils/Validation";
import { 
  FaEye, 
  FaEyeSlash, 
  FaUser, 
  FaLock, 
  FaEnvelope, 
  FaCalendarAlt, 
  FaVenusMars,
  FaGoogle,
  FaFacebook
} from "react-icons/fa";
import "./Login.css";

function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState(null);
  const [sex, setSex] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    
    const formValues = {
      firstName,
      lastName,
      username: userName,
      email,
      password,
      confirmPassword,
      sex,
      birth
    };
    
    const validationErrors = validateUserForm(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage("❌ Please fix the errors in the form");
      setIsLoading(false);
      return;
    }
    
    setErrors({});
    
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          password,
          firstName,
          lastName,
          email,
          birth: birth ? birth.toISOString().split('T')[0] : '',
          sex
        }),
      });
      
      const data = await response.json();
      if (response.ok) {
        if (data.token) {
          localStorage.setItem("token", data.token);
          if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
          }
          setMessage("✅ Registration successful! Redirecting...");
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        } else {
          setMessage("❌ Registration successful but no token received");
        }
      } else {
        setMessage("❌ " + (data.message || "Registration failed"));
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
      
      <div className="auth-card register-card">
        <div className="auth-header">
          <div className="auth-logo">
            <div className="logo-icon">🛡️</div>
            <h1>Stay Clean</h1>
          </div>
          <h2>Create Account</h2>
          <p>Join our community and start your wellness journey</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="auth-input"
                />
              </div>
              {errors.firstName && <div className="error-message">{errors.firstName}</div>}
            </div>
            
            <div className="form-group">
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="auth-input"
                />
              </div>
              {errors.lastName && <div className="error-message">{errors.lastName}</div>}
            </div>
          </div>

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
            {errors.username && <div className="error-message">{errors.username}</div>}
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="auth-input"
              />
            </div>
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <div className="input-wrapper">
                <FaVenusMars className="input-icon" />
                <select
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  required
                  className="auth-input"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              {errors.sex && <div className="error-message">{errors.sex}</div>}
            </div>
            
            <div className="form-group">
              <div className="input-wrapper">
                <FaCalendarAlt className="input-icon" />
                <DatePicker
                  selected={birth}
                  onChange={(date) => setBirth(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Birth date"
                  maxDate={new Date()}
                  className="auth-input datepicker-input"
                  required
                />
              </div>
              {errors.birth && <div className="error-message">{errors.birth}</div>}
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
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
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
            {isPasswordFocused && (
              <div className="password-hint">
                Password must contain at least one special character (!@#$%^&*) and one number
              </div>
            )}
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="auth-input"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
          </div>

          {message && (
            <div className={`message-box ${message.startsWith("✅") ? "success" : "error"}`}>
              {message}
            </div>
          )}

          <button 
            type="submit" 
            className={`auth-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="spinner"></div>
            ) : (
              "Create Account"
            )}
          </button>

          <div className="divider">
            <span>or sign up with Google</span>
          </div>

          <div className="social-buttons">
            <button type="button" className="social-button google">
              <FaGoogle />
              <span>Google</span>
            </button>
          </div>

          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="auth-link">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
