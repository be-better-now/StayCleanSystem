import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Login.css";
// import { useNavigate } from "react-router-dom";
import { validateUserForm } from "../utils/Validation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState(null);
  const [sex, setSex] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      return;
    }
    setIsPasswordError(false);
    setErrors({});
    setMessage("");
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
    }
  };

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
        }}>SIGN UP</h2>
        <form className="form" style={{ display: "flex", flexDirection: "column", gap: 24, width: '100%' }} onSubmit={handleSubmit} autoComplete="off">
          <input type="text" placeholder="First name" style={inputStyle} value={firstName || ''} onChange={e => setFirstName(e.target.value)} autoComplete="off" required />
          {errors.firstName && <div style={errorStyle}>{errors.firstName}</div>}
          <input type="text" placeholder="Last name" style={inputStyle} value={lastName || ''} onChange={e => setLastName(e.target.value)} autoComplete="off" required />
          {errors.lastName && <div style={errorStyle}>{errors.lastName}</div>}
          <input type="text" placeholder="Username" style={inputStyle} value={userName || ''} onChange={e => setUserName(e.target.value)} autoComplete="off" required />
          {errors.username && <div style={errorStyle}>{errors.username}</div>}
          <input type="email" placeholder="Email" style={inputStyle} value={email || ''} onChange={e => setEmail(e.target.value)} autoComplete="off" required />
          {errors.email && <div style={errorStyle}>{errors.email}</div>}
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', fontSize: 18, margin: '8px 0 8px 0', color: '#222', marginLeft: 12 }}>
            <span style={{ minWidth: 90, fontWeight: 500, color: '#222', marginRight: 18 }}>Gender:</span>
            <div style={{ display: 'flex', gap: 28 }}>
              <label style={{fontSize: 18, color: '#222'}}><input type="radio" name="sex" value="male" checked={sex === "male"} onChange={e => setSex(e.target.value)} required /> Male</label>
              <label style={{fontSize: 18, color: '#222'}}><input type="radio" name="sex" value="female" checked={sex === "female"} onChange={e => setSex(e.target.value)} required /> Female</label>
            </div>
          </div>
          {errors.sex && <div style={errorStyle}>{errors.sex}</div>}
          <div style={{width: '100%'}}>
            <DatePicker
              selected={birth}
              onChange={date => setBirth(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Birth date"
              maxDate={new Date()}
              className="form-control"
              style={inputStyle}
              required
            />
          </div>
          {errors.birth && <div style={errorStyle}>{errors.birth}</div>}
          <div style={{ position: "relative", width: '100%' }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              style={inputStyle}
              value={password || ''}
              onChange={e => setPassword(e.target.value)}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              autoComplete="off"
              required
            />
            <span
              onClick={() => setShowPassword(v => !v)}
              style={showBtnStyle}
              tabIndex={0}
              role="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {isPasswordFocused && (
              <div style={{
                fontSize: '14px',
                color: isPasswordError ? '#ff0000' : '#000000',
                marginTop: '4px',
                textAlign: 'left',
                fontWeight: 500
              }}>
                * Password must contain at least one special character (!@#$%^&*) and one number
              </div>
            )}
          </div>
          {errors.password && <div style={errorStyle}>{errors.password}</div>}
          <div style={{ position: "relative", width: '100%' }}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              style={inputStyle}
              value={confirmPassword || ''}
              onChange={e => setConfirmPassword(e.target.value)}
              autoComplete="off"
              required
            />
            <span
              onClick={() => setShowConfirmPassword(v => !v)}
              style={showBtnStyle}
              tabIndex={0}
              role="button"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.confirmPassword && <div style={errorStyle}>{errors.confirmPassword}</div>}
          {message && (
            <div className="message-box" style={{ textAlign: "center", margin: "8px 0", color: message.startsWith("✅") ? "green" : "red" }}>
              {message}
            </div>
          )}
          <button type="submit" style={{...buttonStyle, width: '100%'}}>SIGN UP</button>
          <p style={{ textAlign: "center", marginTop: 16, fontSize: 15 }}>
            Already have an account? <a href="/login">Login</a>
          </p>
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

const showBtnStyle = {
  position: "absolute",
  right: 32,
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  color: "#1667d9",
  fontWeight: 500,
  fontSize: 18,
  background: 'none',
  border: 'none',
  padding: 0,
  lineHeight: 1
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

const errorStyle = {
  color: 'red',
  fontSize: '14px',
  textAlign: 'left',
  width: '80%',
  margin: '0 0 10px 0'
};

export default RegisterPage;
