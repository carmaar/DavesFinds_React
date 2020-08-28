import React from "react";
import "./style.css";
// material-ui
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
// images
import landing from "./landing.jpeg";
// routes
import Catalog from "./Catalog.js";
import SignUp from "./SignUp.js";
import Nav from "./Nav.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

function Home() {
  return (
    <Switch>
      <Router>
        <div className="App">
          <Container
            id="land"
            maxWidth="sm"
            styles={{ backgroundImage: `url(${landing})` }}
          >
            <h1>Uniquely found.</h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h2>
          </Container>
          ;
        </div>
      </Router>
    </Switch>
  );
}

export default Home;
