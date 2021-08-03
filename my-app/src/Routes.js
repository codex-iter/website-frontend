import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Members from "./core/Members";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/members' exact component={Members} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
