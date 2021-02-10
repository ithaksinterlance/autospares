import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Solite from "./Solite";
import Varta from "./Varta";
import Acdelco from "./Acdelco";
import Amaron from "./Amaron";
import Form from "./form";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/solite" component={Solite} />
    <Route exact path="/varta" component={Varta} />
    <Route exact path="/acdelco" component={Acdelco} />
    <Route exact path="/amaron" component={Amaron} />
    <Route exact path="/form" component={Form} />
  </Switch>
);

export default Main;
