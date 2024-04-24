import React, { useState } from "react";
import { Link } from "react-router-dom";
import { saveUserData } from "../../Localstorage";

const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, let's just log the username and password for now
    console.log("Username:", username);
    console.log("Password:", password);
    saveUserData("userData", { username, password });
  };

  return (
    <div>
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
    </div>
  );
};

export default AuthPage;
