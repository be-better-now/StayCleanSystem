import React, {useState} from "react";
import "./Login.css"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";


function LoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitting login for:", userName, password); 
  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });

    if (response.ok) {
      const data = await response.json(); // ✅ user info
      console.log("User data:", data);
      setMessage(data.message);
      if (data.success == true){
        // Save to localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        //redirect
        navigate("/");
      }

      
      
    } else {
      const errorText = await response.text(); // ⬅️ get plain text error
      setMessage("❌ " + errorText);
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
        <form className="form" onSubmit={handleSubmit}>
          <input type="username"placeholder="Enter your username"value={userName}onChange={(e) => setUserName(e.target.value)}required/>
          <input type="password" placeholder="Enter your password"value={password}onChange={(e) => setPassword(e.target.value)}required/>

          {message && (
          <div className="message-box">
          {message}
          </div>
          )}


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
