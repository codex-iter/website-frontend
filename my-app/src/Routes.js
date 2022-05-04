import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Event from "./pages/Event";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/404";
import Alumni from "./pages/Alumni.jsx";

const Routes = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/members" exact component={Members} />
          <Route path="/alumni" exact component={Alumni} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/events" exact component={Event} />

          <Route path="" component={Error} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
