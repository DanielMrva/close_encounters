import "./Login.css";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
// merging

import { useUserName, useUpdateUserName } from "../../components/Context/UserContext";

// export default function Login(props) {
export default function Login() {

  const updateUserName = useUpdateUserName();
  const userName = useUserName();

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // localStorage.setItem('username', )

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {

    let loggedIn;

    event.preventDefault();
    // console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);

      if (Auth.loggedIn) {
        localStorage.setItem("user", data.login.user.username);
        localStorage.setItem("userId", data.login.user._id);

        loggedIn = data.login.user.username;

      }
    } catch (e) {
      console.error(e);
    }

    updateUserName(loggedIn);

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (

    <div className="login-page">
      <div className="login-flex-container">
        <div className="center-flex-container heading-container-login">
          <div className="sub-text">welcome back</div>
          <h2 className="main-text">SIGN-IN TO YOUR ACCOUNT</h2>
        </div>

        <div className="form-flex-container">
          <form onSubmit={handleFormSubmit}>
            <label className="sub-text">email</label>
            <div className="input-area">
              <input
                className="form-input"
                name="email"
                type="text"
                required
                defaultValue={formState.email}
                onChange={handleChange}
              />
            </div>

            <label className="sub-text">password</label>
            <div className="input-area">
              <input
                name="password"
                type="password"
                required
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="button1 sub-text"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                login
              </button>
            </div>
          </form>

          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
        </div>

        <div className="center-flex-container">
          <div className="sub-text" style={{ fontWeight: "700" }}>
            <Link to="/loginnew">new user? click here</Link>
          </div>
        </div>

        {/* <h2>{username}</h2> */}
      </div>
    </div>
  );
}

// export default Login;
