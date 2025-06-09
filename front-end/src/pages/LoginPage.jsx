import React from "react";
import "./Login.css"; // Adjust the path as needed

function LoginPage() {
  return (
    <div>
      <header>
        <div className="login-header-container">
          
        </div>
      </header>

      <div className="sign-in-container">
        <div className="title">
          <h2><b>LOGIN</b></h2>
        </div>
        <form className="form">
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />

          <button type="submit">LOGIN</button>

          <div className="form-options">
            <a href="#">Forgot password?</a>
          </div>

          <p className="signup-text">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
