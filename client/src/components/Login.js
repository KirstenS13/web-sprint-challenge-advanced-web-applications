import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const { push } = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const attemptLogin = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        console.log(res);
        setCredentials({
          username: "",
          password: ""
        });
        localStorage.setItem("token", res.data.payload);
        push("/bubble-page");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={attemptLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username..."
          value={credentials.username}
          onChange={handleChanges}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password..."
          value={credentials.password}
          onChange={handleChanges}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
