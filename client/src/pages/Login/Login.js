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
    <div className="login-page">
      <div className="login-flex-container">
        <div className="center-flex-container heading-container-login">
          <div className="sub-text">welcome back</div>
          <h2 className="main-text">SIGN-IN TO YOUR ACCOUNT</h2>
        </div>

        <div className="form-flex-container">
          <form onSubmit={handleSubmit}>
            <label className="sub-text">username</label>
            <div className="input-area">
              <input
                type="text"
                required
                defaultValue={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <label className="sub-text">password</label>
            <div className="input-area">
              <input
                type="text"
                required
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="button1 sub-text">login</button>
            </div>
          </form>
        </div>

        <div className="center-flex-container">
          <div className="sub-text" style={{ fontWeight: "700" }}>
            new user? click here
          </div>
        </div>

        <h2>{username}</h2>
      </div>
    </div>
  );
}
