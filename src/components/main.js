import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Solite from "./Solite.js";
import Varta from "./Varta.js";
import Acdelco from "./Acdelco.js";
import Amaron from "./Amaron.js";
import Brands from "./brands.js";
import Services from "./services.js";
import Sell from "./sell.js";
import test from "./Blog1.js";
import contact from "./Contact.js";
import How_to_maintain_your_car_battery from "./Blog1.js";
import How_to_know_if_your_car_battery_is_dying from "./Blog2.js";
import Tip_to_sanitize_your_car_during_covid_19 from "./Blog3.js";
import All_you_need_to_know_about_car_battery from "./Blog4.js";
import Top_4_battery_for_your_car from "./Blog5.js";
import BlogSidebar from "./BlogSidebar.js";
import Post from "./Post.js";

const Main = () => (
  <Router>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/google760dbaa359091b71.html" component={() => { 
     window.location.href = 'google760dbaa359091b71.html'; 
     return null;
}}/>
    <Route exact path="/solite-battery" component={Solite} />
    <Route exact path="/varta-battery" component={Varta} />
    <Route exact path="/acdelco-battery" component={Acdelco} />
    <Route exact path="/amaron-battery" component={Amaron} />
    <Route exact path="/car-battery-brands" component={Brands} />
    <Route exact path="/car-battery-replacement" component={Services} />
    <Route exact path="/become-a-partner" component={Sell} />
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
  </Router>
);

export default Main;
