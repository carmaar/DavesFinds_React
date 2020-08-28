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
import Home from "./Home.js";
import Catalog from "./Catalog.js";
import SignUp from "./SignUp.js";
import Nav from "./Nav.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

function Contact() {
  return (
    <Router>
      <div className="Contact">
        <h1>Contact</h1>
      </div>
    </Router>
  );
}

export default Contact;
