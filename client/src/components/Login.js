import React from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username..."
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password..."
        />
      </form>
    </>
  );
};

export default Login;
