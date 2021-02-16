import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Solite from "./Solite";
import Varta from "./Varta";
import Acdelco from "./Acdelco";
import Amaron from "./Amaron";
import Form from "./form";
import Brands from "./brands";
import Services from "./services";
import Sell from "./sell";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/solite" component={Solite} />
    <Route exact path="/varta" component={Varta} />
    <Route exact path="/acdelco" component={Acdelco} />
    <Route exact path="/amaron" component={Amaron} />
    <Route exact path="/form" component={Form} />
    <Route exact path="/brands" component={Brands} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/sell" component={Sell} />
  </Switch>
);

export default Main;
