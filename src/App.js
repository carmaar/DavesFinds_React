import React from "react";
import "./style.css";
// material-ui
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
// images
import landing from "./landing.jpeg";
// pages
import Catalog from "./Catalog.js";
import SignUp from "./SignUp.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Container id="header" maxWidth="sm">
          <h1>Dave's Finds</h1>
          <ul id="nav">
            <li>
              <a href="/">
                {" "}
                <Button href="/">Browse</Button>
              </a>{" "}
            </li>
            <li>
              <a href="/">
                {" "}
                <Button href="/">Contact</Button>
              </a>{" "}
            </li>
            <li>
              <a href="/">
                {" "}
                <Button href="/">Request</Button>
              </a>{" "}
            </li>
          </ul>

          <a href="/">
            <SearchIcon />
          </a>
        </Container>

        <Container
          id="land"
          maxWidth="sm"
          styles={{ backgroundImage: `url(${landing})` }}
        >
          <h1>Uniquely found.</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h2>
        </Container>
      </div>
    </Router>
  );
}

export default App;
