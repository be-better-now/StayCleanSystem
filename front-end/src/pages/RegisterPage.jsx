import React, { useState } from "react";
import "./Login.css"; // Reuse your styles for consistency
import { useNavigate } from "react-router-dom";
import { validateUserForm } from "../utils/Validation";

function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formValues = { firstName, lastName, username: userName, email, password };
    const validationErrors = validateUserForm(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Submitting registration for:", userName, email);

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password, firstName, lastName, email }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration data:", data);
        setMessage(data.message || "✅ Registration successful!");
        if (data.success === true) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/");
        }
      } else {
        const errorText = await response.text();
        setMessage("❌ " + errorText);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("❌ Server error. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="title">
        <h2><b>SIGN UP</b></h2>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          maxLength={100}
          required
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          maxLength={100}
          required
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          maxLength={100}
          required
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={100}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          maxLength={50}
          required
        />
        {errors.password && <p className="error">{errors.password}</p>}

        {message && (
          <div className="message-box">
            {message}
          </div>
        )}

        <button type="submit">SIGN UP</button>

        <p className="signup-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
