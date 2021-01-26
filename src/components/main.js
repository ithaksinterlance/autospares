import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Main;
