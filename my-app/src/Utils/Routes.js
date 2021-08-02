import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "../Containers/Error";
import Contact from "../Containers/Contact";
import About from "../Containers/About"
function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/contact" exact component={ Contact } />
                    <Route path="/about" exact component={ About } />
                     <Route path="" exact component={ Error } />
                </Switch>
            </Router>
        </>
    )
}

export default Routes