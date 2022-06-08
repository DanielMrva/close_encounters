import "./Login.css";
import React, { useState } from "react";
import Loginnew from "./Loginnew";

export default function Login() {
  const [currentPage, setCurrentPage] = useState("Login");
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");

  const renderPage = () => {
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "Loginnew") {
      return <Loginnew />;
    }
    return;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    renderPage(page);
  };

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
            <a href="#Loginnew" onClick={() => handlePageChange("Loginnew")}>
              new user? click here
            </a>
          </div>
        </div>

        <h2>{username}</h2>
      </div>
    </div>
  );
}
