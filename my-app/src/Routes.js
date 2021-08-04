import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"
import Home from "./core/Home";
import Members from "./core/Members";
import Event from "./core/Event";
import Contact from "./core/Contact";
import About from "./core/About";
import Error from "./core/Error";
const Routes = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/members' exact component={Members} />
          <Route path='/events' exact component={Event} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/about' exact component={About} />
          <Route path='' component={Error} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
