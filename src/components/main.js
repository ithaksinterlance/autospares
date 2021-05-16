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
import How_to_maintain_your_car_battery from "./Blog1";
import How_to_know_if_your_car_battery_is_dying from "./Blog2.js";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/solite" component={Solite} />
    <Route exact path="/varta" component={Varta} />
    <Route exact path="/acdelco" component={Acdelco} />
    <Route exact path="/amaron" component={Amaron} />
    <Route exact path="/car-battery-brands" component={Brands} />
    <Route exact path="/car-battery-replacement" component={Services} />
    <Route exact path="/become-a-partner" component={Sell} />
    <Route exact path="/sold" component={Sold} />
    <Route exact path="/test" component={test} />
    <Route exact path="/contact" component={contact} />
    <Route
      exact
      path="/How_to_maintain_your_car_battery"
      component={How_to_maintain_your_car_battery}
    />
  </Switch>
);

export default Main;
