import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Solite from "./Solite";
import Varta from "./Varta";
import Acdelco from "./Acdelco";
import Amaron from "./Amaron";
import Brands from "./brands";
import Services from "./services";
import Sell from "./sell";
import Sold from "./sold";
import test from "./Blog1";
import contact from "./Contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/solite" component={Solite} />
    <Route exact path="/varta" component={Varta} />
    <Route exact path="/acdelco" component={Acdelco} />
    <Route exact path="/amaron" component={Amaron} />
    <Route exact path="/brands" component={Brands} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/sell" component={Sell} />
    <Route exact path="/sold" component={Sold} />
    <Route exact path="/test" component={test} />
    <Route exact path="/contact" component={contact} />
  </Switch>
);

export default Main;
