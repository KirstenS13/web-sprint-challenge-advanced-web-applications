import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";

//stretch
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/about">About Us</Link>
          <Link to="/bubble-page">Your Bubbles</Link>
        </nav>
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path="/bubble-page" component={BubblePage} />
        {/* stretch goal */}
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
