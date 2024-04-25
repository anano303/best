import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserData } from "./Localstorage";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

const AuthPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        navigate("/mypage");
      })
      .catch((error) => {
        console.log(error);
        setError("Invalid email or password"); // Set error message for invalid login attempt
      });
  };

  return (
    <div className="auth">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button>
          <Link to="/">Back To Main</Link>
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
