import React from "react";
import "./style.css";
// material-ui
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

// images
import landing from "./landing.jpeg";

function Catalog() {
  return (
    <div className="App">
      <Container id="header" maxWidth="sm">
        <h1>Catalog</h1>
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
        <ul id="nav">
          <li>
            <a href="/">
              {" "}
              <Button href="/" color="primary">
                Browse
              </Button>
            </a>{" "}
          </li>
          <li>
            <a href="/">
              {" "}
              <Button href="/" color="primary">
                Contact
              </Button>
            </a>{" "}
          </li>
          <li>
            <a href="/">
              {" "}
              <Button href="/" color="primary">
                Request
              </Button>
            </a>{" "}
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Catalog;
