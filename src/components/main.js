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
import How_to_know_if_your_car_battery_is_dying from "./Blog2";
import Tip_to_sanitize_your_car_during_covid_19 from "./Blog3";
import All_you_need_to_know_about_car_battery from "./Blog4";
import Top_4_battery_for_your_car from "./Blog5";
import BlogSidebar from "./BlogSidebar";
import Post from "./Post";

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
    <Route exact path="/BlogSidebar" component={BlogSidebar} />
    <Route exact path="/post" component={Post} />
    <Route
      exact
      path="/post/how_to_maintain_your_car_battery"
      component={How_to_maintain_your_car_battery}
    />
    <Route
      exact
      path="/post/how_to_know_if_your_car_battery_is_dying"
      component={How_to_know_if_your_car_battery_is_dying}
    />
    <Route
      exact
      path="/post/tip_to_sanitize_your_car_during_covid_19"
      component={Tip_to_sanitize_your_car_during_covid_19}
    />
    <Route
      exact
      path="/post/all_you_need_to_know_about_car_battery"
      component={All_you_need_to_know_about_car_battery}
    />
    <Route
      exact
      path="/post/top_4_battery_for_your_car"
      component={Top_4_battery_for_your_car}
    />

    <Route
      exact
      path="/how_to_maintain_your_car_battery"
      component={How_to_maintain_your_car_battery}
    />
    <Route
      exact
      path="/how_to_know_if_your_car_battery_is_dying"
      component={How_to_know_if_your_car_battery_is_dying}
    />
    <Route
      exact
      path="/tips_to_sanitize_your_car_during_covid_19"
      component={Tip_to_sanitize_your_car_during_covid_19}
    />
    <Route
      exact
      path="/all_you_need_to_know_about_car_battery"
      component={All_you_need_to_know_about_car_battery}
    />
    <Route
      exact
      path="/top_4_battery_for_your_car"
      component={Top_4_battery_for_your_car}
    />
  </Switch>
);

export default Main;
