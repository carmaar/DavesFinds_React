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
import Home from "./Home.js";
import Catalog from "./Catalog.js";
import SignUp from "./SignUp.js";
import Contact from "./Contact.js";

// react-router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <Container id="header" maxWidth="sm">
        <Link to="/">
          <h1>Dave's Finds</h1>
        </Link>
        <ul id="nav">
          <li>
            <Link to="/Catalog">
              <Button>Browse</Button>
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <Button>Contact</Button>
            </Link>
          </li>
          <li>
            <Link to="/SignUp">
              <Button>Request</Button>
            </Link>
          </li>
        </ul>

        <SearchIcon />
      </Container>
    </div>
  );
}

export default Nav;
