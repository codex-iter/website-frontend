import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Event from "./pages/Event";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/404";
import Alumni from "./pages/Alumni.jsx";

const AppRouter = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={Home} />
          <Route path="/members" exact element={Members} />
          <Route path="/alumni" exact element={Alumni} />
          <Route path="/about" exact element={About} />
          <Route path="/contact" exact element={Contact} />
          <Route path="/events" exact element={Event} />
          <Route path="" element={Error} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
