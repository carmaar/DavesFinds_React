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
import Contact from "./Contact.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Catalog" component={Catalog} />
          <Route path="/Contact" component={Contact} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
