import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import CarBattery from "../img/battery.webp";
import Speedometer from "../img/speedometer.webp";
import BlackCar from "../img/blackcar.jpg";
import { MetaTags } from "react-meta-tags";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/blur.css";

export default class Post extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MetaTags>
          <meta charSet="utf-8" />
          <title>Blogs | AutoB</title>
          <meta
            name="title"
            content="Car Battery replacement DUBAI| Replace your car battery at anytime at Dubai and Sharjah. We offer the best battery replacement service"
          />
          <meta
            name="description"
            content="Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. 24/7 support. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta."
          />
          <meta
            name="keywords"
            content="car battery replacement sharjah, car battery replacement dubai, car battery replacement uae ,car battery change, car battery dubai, car battery uae, car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement"
          />
          <link
            rel="canonical"
            href="https://autobatteries.hakstime.com/post"
          />
        </MetaTags>
        <div className="container">
          <div className="row d-xs-flex justify-content-center d-sm-flex justify-content-center d-flex justify-content-between ">
            <div className="col-md-3">
              <div className="container-fluid">
                <div class="card postCard">
                  <LazyLoadImage
                    alt="car battery sharjah"
                    effect="blur"
                    className="card-img-top"
                    src={CarBattery}
                  />
                  <div class="card-body">
                    <h5 class="card-title">How to maintain your car battery</h5>
                    <p class="card-text">
                      Switch On Your Car Engine very often in winter, Cool the
                      temprature of your car in summer, Idea from this based
                      lady in cooling her car, Clean Your battery from Dust, How
                      often should your change your battery?
                    </p>
                    <Link
                      to="/How_to_maintain_your_car_battery"
                      class="btn btn-primary"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="container-fluid">
                <div class="card postCard">

                  <LazyLoadImage
                    alt="car battery replacement sharjah"
                    effect="blur"
                    className="card-img-top"
                    src={Speedometer}
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      How to know if your car battery is dying
                    </h5>
                    <p class="card-text">
                      Dimming of headlights, Battery connectors are corroded,
                      Car makes a sound when turning on the engine, Your car
                      battery is more than 3.5 years, Bad smells
                    </p>
                    <Link
                      to="/How_to_know_if_your_car_battery_is_dying"
                      class="btn btn-primary"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="container-fluid">
                <div class="card postCard">
                  <LazyLoadImage
                    alt="car battery dubai"
                    effect="blur"
                    className="card-img-top"
                    src={CarBattery}
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Tips to sanitize your car during covid-19
                    </h5>
                    <p class="card-text">
                      Sanitize your car handles, Clean your upholstery, Donot
                      use wet cloth for sanitizing, Disinfect your air
                      conditioning system, Personal Hygiene, Wear disposable
                      hand gloves and Mask, Get off the car only if necessary,
                      Prepare sticky notes
                    </p>
                    <Link
                      to="/tips_to_sanitize_your_car_during_covid_19"
                      class="btn btn-primary"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-xs-flex justify-content-center d-sm-flex justify-content-center d-flex justify-content-between ">
            <div className="col-md-3">
              <div className="container-fluid">
                <div class="card postCard">
                  <LazyLoadImage
                    alt="car battery sharjah"
                    effect="blur"
                    className="card-img-top"
                    src={CarBattery}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Top 4 battery for your car</h5>
                    <p class="card-text">Amaron , Acdelco , Solite , Varta</p>
                    <Link
                      to="/top_4_battery_for_your_car"
                      class="btn btn-primary"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="container-fluid">
                <div class="card postCard">

                  <LazyLoadImage
                    alt="battery replacement sharjah"
                    effect="blur"
                    className="card-img-top"
                    src={BlackCar}
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      All you need to know about car battery
                    </h5>
                    <p class="card-text">
                      Do's and Dont's inside the car during pandemic , When will
                      your car battery die , Don't use tap water to refill your
                      battery , Find the CCA(Cold Cranking Amps) of your battery
                      , Brand of your car battery, Warranty, Manufacturing date
                      , Battery types , Know about our service
                    </p>
                    <Link
                      to="/all_you_need_to_know_about_car_battery"
                      class="btn btn-primary"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Footer />
        </div>
      </div>
    );
  }
}
