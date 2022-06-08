import "./Login.css";
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
    <div className="login-page">
      <div className="login-flex-container">
        <div className="center-flex-container heading-container-login">
          <div className="sub-text">let's get close</div>
          <h2 className="main-text">NEW USER SIGN-UP</h2>
        </div>

        <div className="form-flex-container">
          <form onSubmit={handleSubmit}>
            <label className="sub-text">username:</label>
            <input
              className="input-area"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label className="sub-text">email:</label>
            <input
              className="input-area"
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="sub-text">password:</label>
            <input
              className="input-area"
              type="text"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="button1 sub-text">sign-up</button>
            </div>
          </form>
        </div>

        <div className="center-flex-container">
          <div className="sub-text" style={{ fontWeight: "700" }}>
            existing user? click here
          </div>
        </div>
        <h2>{username}</h2>
      </div>
    </div>
  );
}
