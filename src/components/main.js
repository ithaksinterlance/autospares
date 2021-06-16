import React, {Suspense, lazy} from "react";
import {  Route, Switch } from "react-router-dom";
const Home = lazy(() => import('./Home'));
const Solite = lazy(() => import('./Solite'));
const Varta = lazy(() => import('./Varta'));
const Acdelco = lazy(() => import('./Acdelco'));
const Amaron = lazy(() => import('./Amaron'));
const Brands = lazy(() => import('./brands'));
const Services = lazy(() => import('./services'));
const Sell = lazy(() => import('./sell'));
const contact = lazy(() => import('./Contact'));
const How_to_maintain_your_car_battery = lazy(() => import('./Blog1'));
const How_to_know_if_your_car_battery_is_dying = lazy(() => import('./Blog2'));
const Tip_to_sanitize_your_car_during_covid_19 = lazy(() => import('./Blog3'));
const All_you_need_to_know_about_car_battery = lazy(() => import('./Blog4'));
const Top_4_battery_for_your_car = lazy(() => import('./Blog5'));
const BlogSidebar = lazy(() => import('./BlogSidebar'));
const Post = lazy(() => import('./Post'));
const Sitemap = lazy(() => import('./sitemap.xml'))

const Main = () => (
  <Suspense fallback={<div className="loader"></div>}>
<Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/sitemap.xml" component={Sitemap} />
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
  </Suspense>
);
export default Main;
