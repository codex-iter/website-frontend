import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"
import Home from "./core/Home";
import Members from "./core/Members";
import Contact from "./Containers/Contact"
import About from "./Containers/About"
import Error from "./Containers/Error"
const Routes = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/members' exact component={ Members } />
          <Route path='/contact' exact component={ Contact } />
          <Route path='/about' exact component={ About } />
          <Route path=''  component={ Error } />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
