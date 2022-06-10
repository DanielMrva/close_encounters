import "./Login.css";
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Link } from "react-router-dom";
import Loginnew from "./Loginnew";

export default function Login({ currentPage, handlePageChange }) { 
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

// const Login = (props) => {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [login, { error, data }] = useMutation(LOGIN_USER);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const login = { username, password };
  //   console.log(login);
  // };
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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
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
                type="email"
                required
                defaultValue={formState.email}
                onChange={(e) => handleChange(e.target.value)}
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
              <button href="#User" onClick={() => handlePageChange("User")}
              className="button1 sub-text"
              type="submit"
              >
                login   
              </button>
            </div>
          </form>
        </div>

        <div className="center-flex-container">
          <div className="sub-text" style={{ fontWeight: "700" }}>
            <Link to="loginnew">
              new user? click here
            </Link>
          </div>
        </div>

        {/* <h2>{username}</h2> */}
      </div>
    </div>
  );
}

// export default Login;
