// AuthPage.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUserData } from "./Localstorage";
import { useNavigate } from "react-router-dom/dist";
import "./Auth.css";

const AuthPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const storedUserData = getUserData("userData");

    // Check if the username exists in localStorage
    if (!storedUserData || !storedUserData.userName) {
      setError("Username not found");
      return;
    }

    // Check if the provided username and password match the stored data
    if (
      username !== storedUserData.userName ||
      password !== storedUserData.password
    ) {
      setError("Incorrect username or password");
      return;
    }

    // Perform authentication logic here
    console.log("Authentication successful");
    navigate("/mypage");
  };

  return (
    <div className="auth">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button>
        {" "}
        <Link to="/signup">Sign Up</Link>{" "}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button>
        <Link to="/">Back To Main</Link>
      </button>
    </div>
  );
};

export default AuthPage;
