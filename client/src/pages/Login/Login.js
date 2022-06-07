import "./Login.css";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = { username, password };
    console.log(login);
  };

  return (
    <div className="login-container">
      <div className="heading-container-login">
        <h6>welcome back</h6>
        <h2>SIGN-IN TO YOUR ACCOUNT</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>username:</label>
        <input
          type="text"
          required
          defaultValue={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>password:</label>
        <input
          type="text"
          required
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>login</button>
      </form>
      <h6>new user? click here</h6>
      <h2>{username}</h2>
    </div>
  );
}
