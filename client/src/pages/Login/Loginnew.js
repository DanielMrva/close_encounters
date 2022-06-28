import "./Login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

import Cookies from 'universal-cookie';

export default function Loginnew() {

  const cookie = new Cookies;

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);

      if (Auth.loggedIn) {
        console.log("this is data", data);
        localStorage.setItem("user", data.addUser.user.username);
        localStorage.setItem("userId", data.addUser.user._id);
        cookie.set('username', data.addUser.user.username, {path: '/'})
        cookie.set('userId', data.addUser.user._id, {path: '/'});

        // window.location.href = "/user";
      }
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-page">
      <div className="login-flex-container">
        <div className="center-flex-container heading-container-login">
          <div className="sub-text">let's get close</div>
          <h2 className="main-text">NEW USER SIGN-UP</h2>
        </div>

        <div className="form-flex-container">
          <form onSubmit={handleFormSubmit}>
            <label className="sub-text">username:</label>
            <input
              className="form-input"
              name="username"
              type="text"
              required
              value={formState.username}
              onChange={handleChange}
            />

            <label className="sub-text">email:</label>
            <input
              className="form-input"
              name="email"
              type="text"
              required
              value={formState.email}
              onChange={handleChange}
            />

            <label className="sub-text">password:</label>
            <input
              className="form-input"
              name="password"
              type="password"
              required
              value={formState.password}
              onChange={handleChange}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="button1 sub-text"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                sign-up
              </button>
            </div>
          </form>
        </div>

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}

        <div className="center-flex-container">
          <div className="sub-text" style={{ fontWeight: "700" }}>
            <Link to="/login">existing user? click here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
