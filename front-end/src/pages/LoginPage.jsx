import React, {useState} from "react";
import "./Login.css"; // Adjust the path as needed

function LoginPage() {
    //TODO intergrate login API
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userName, password }),
            });

            const data = await response.json();

            if (data.success) {
                setMessage("✅ " + data.message);
                // TODO: Save token/user info if needed
                // Redirect to homepage or dashboard
            } else {
                setMessage("❌ " + data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
            setMessage("❌ Server error. Please try again.");
        }
    };
    return (
    
      <div className="login-container">
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
    
  );
}

export default LoginPage;
