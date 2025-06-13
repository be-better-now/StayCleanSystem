import React, { useState } from "react";
import "./Login.css"; // Reuse your styles for consistency
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          // Save to localStorage if you want auto-login after register
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
        <input type="text" placeholder="First name" value={firstName}
          onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" placeholder="Last name" value={lastName}
          onChange={(e) => setLastName(e.target.value)} required />
        <input type="text" placeholder="Username" value={userName}
          onChange={(e) => setUserName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />

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
