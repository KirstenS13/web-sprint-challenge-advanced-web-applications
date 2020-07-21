import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";

//stretch
import About from './components/About';
import Contact from './components/Contact';
//import styled from 'styled-components';

/* const Div = styled.div`
    display: flex;
    flex-direction: column;
    
    margin: auto;
    padding: ${props => props.primary ? "0" : "10px" };

    background-color: ${props => props.primary ? "transparent" : "thistle" };
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  margin: 20px auto;
` */

function App() {
  return (
    <Router>
      <div primary className="App">
        <nav className="navbar">
          <Link to="/about" style={{ textDecoration: "none", padding: "10px" }}>About Us</Link>
          <Link to="/contact" style={{ textDecoration: "none", padding: "10px" }}>Contact Us</Link>
          <Link to="/bubble-page" style={{ textDecoration: "none", padding: "10px" }}>Your Bubbles</Link>
        </nav>
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path="/bubble-page" component={BubblePage} />
        {/* stretch goal */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
