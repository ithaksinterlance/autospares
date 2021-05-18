import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import CarBattery from "../img/battery.jpeg";
import Speedometer from "../img/speedometer.jpeg";
import Sanitize from "../img/sanitize.jpg";

export default class Post extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row d-xs-flex justify-content-center d-sm-flex justify-content-center d-flex justify-content-between ">
            <div className="col-md-3">
              <div className="container-fluid">
                <div class="card postCard">
                  <img
                    class="card-img-top"
                    src={CarBattery}
                    alt="autobatteries"
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
                      to="/post/How_to_maintain_your_car_battery"
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
                  <img
                    class="card-img-top"
                    src={Speedometer}
                    alt="autobatteries"
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
                      to="/post/How_to_know_if_your_car_battery_is_dying"
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
                  <img
                    class="card-img-top"
                    src={Sanitize}
                    alt="autobatteries"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Tip to sanitize your car during covid-19
                    </h5>
                    <p class="card-text">
                      Sanitize your car handles, Clean your upholstery, Donot
                      use wet cloth for sanitizing, Disinfect your air
                      conditioning system, Personal Hygiene, Wear disposable
                      hand gloves and Mask, Get off the car only if necessary,
                      Prepare sticky notes
                    </p>
                    <Link
                      to="/post/Tip_to_sanitize_your_car_during_covid_19"
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
