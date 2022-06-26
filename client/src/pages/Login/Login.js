import "./Login.css";
import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
// merging

import { UserContext } from "../../utils/UserContext";

let user;

export default function Login() {

  const { dispatch } = useContext(UserContext);

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

    event.preventDefault();
    // console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);

      dispatch({
        type: 'SET_USER',
        username: 'function'
      })

      if (Auth.loggedIn) {
        localStorage.setItem("user", data.login.user.username);
        localStorage.setItem("userId", data.login.user._id);
        user = data.login.user.username;
      }

      dispatch({
        type: 'SET_USER',
        username: 'function test'
      })

    } catch (e) {
      console.error(e);
    }

    console.log('user: ', user);

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

      </div>
    </div>
  );
}

// export default Login;
