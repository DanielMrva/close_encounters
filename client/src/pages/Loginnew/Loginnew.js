import "./Loginnew.css";
import React, { useState } from "react";

export default function Loginnew() {
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLogin = { username, email, password };
    console.log(newLogin);
  };

  return (
    <div className="login-container">
      <div className="heading-container-login">
        <h6>let's get close</h6>
        <h2>NEW USER SIGN-UP</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>username:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>email:</label>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>password:</label>
        <input
          type="text"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>sign-up</button>
      </form>
      <h6>existing user? click here</h6>
      <h2>{username}</h2>
    </div>
  );
}
