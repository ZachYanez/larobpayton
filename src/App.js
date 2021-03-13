import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Bio from "./Pages/Bio";
import Writing from "./Pages/Writing";

import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/home" component={Home}>
        <Home />
      </Route>
      <Route exact path="/bio" component={Bio}>
        <Bio />
      </Route>
      <Route exact path="/writing">
        <Writing />
      </Route>
    </Router>
  );
}

export default App;
