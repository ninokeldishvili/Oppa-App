import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routes/home";
import Mobile from "./routes/mobile";
import Utility from "./routes/utility";
import Finances from "./routes/finances";

export default () => (
  <Router>
    <AppHeader title="Oppa" />

    <main className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mobile" component={Mobile} />
        <Route path="/utility" component={Utility} />
        <Route path="/finances" component={Finances} />
        <Route path="/charity" render={charityroute} />
      </Switch>
    </main>
  </Router>
);

const AppHeader = ({ title }) => (
  <h1 className="App-title">
    <Link to="/">{title}</Link>
  </h1>
);

const charityroute = () => (
  <h3 className="text-center">
    Charity <small>Coming Soon</small>
  </h3>
);
