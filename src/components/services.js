import React, { Component } from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import CarBattery from "../img/carbattery.webp";
import MJ2 from "../img/batteryimg.jpg";
import Road from "../img/road.webp";
import { MetaTags } from "react-meta-tags";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

export default class services extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>
            Car Battery replacement | Dubai & Sharjah | Autobatteries.hakstime
          </title>
          <meta charset="utf-8" />
          <meta
            name="title"
            content="Car Battery replacement Dubai | Autobatteries.hakstime"
          />
          <meta
            name="description"
            content="Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. 24/7 support. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta."
          />
          <meta
            name="keywords"
            content="car battery replacement,car battery replacement sharjah, car battery replacement dubai, car battery replacement uae ,car battery change, car battery dubai, car battery uae, car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="author" content="autobatteries.hakstime.com" />
        </MetaTags>
        <Navbar />
        <div className="container-fluid header-text1 px-0">
          <LazyLoadImage
            alt="car battery sharjah"
            effect="blur"
            className="img-fluid header-img"
            src={CarBattery}
          />
          <div className="header-txt display-4" style={{ paddingLeft: "10px" }}>
            Replace Your Car Battery as it wears off
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body bg-white text-center shadow-lg">
                  <i className="fa fa-check-circle fa-5x" aria-hidden="true"></i>
                  <h5 className="text-center paragraph">
                    Warranty Guaranteed
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body bg-white text-center shadow-lg">
                  <i className="fas fa-money-bill fa-5x" aria-hidden="true"></i>
                  <h5 className="text-center paragraph">Easy payment</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body bg-white text-center shadow-lg">
                  <i className="fa fa-wrench fa-5x" aria-hidden="true"></i>
                  <h5 className="text-center paragraph">
                    Professional Service
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body bg-white text-center shadow-lg">
                  <i className="fa fa-phone fa-5x" aria-hidden="true"></i>
                  <h5 className="text-center paragraph">
                    Quick response
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body bg-white text-center shadow-lg">
                  <i className="fas fa-clock fa-5x" aria-hidden="true"></i>
                  <h5 className="text-center paragraph">24/7 Support</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body bg-white text-center shadow-lg">
                  <i className="fas fa-car-battery fa-5x paragraph1-icon" aria-hidden="true"></i>
                  <h5 className="text-center paragraph">
                    OEM Batteries
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5 div-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <LazyLoadImage
                  alt="car battery replacement sharjah"
                  effect="blur"
                  className="img-fluid warranty"
                  src={Road}
                />
              </div>
              <div className="col-md-6">
                <hr />
                <h1 className="heading">Car battery replacement sharjah</h1>
                <hr />
                <h1 className="paragraph">
                  Have you ever experienced the situation when your car battery
                  dead in middle of the road? Indeed! this is the most difficult
                  situation one can have. But here we are to help you with car
                  battery replacement in sharjah with best price.{" "}
                  <Link to="/contact">Fill the pre order form</Link> now. We
                  will catch up with you in some time.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <hr />
                <h1 className="heading">Car battery replacement Dubai</h1>
                <hr />
                <h1 className="paragraph">
                  Dont panic! we know your car battery is dead. Car battery
                  delivery and car battery installation available at office or
                  home or anywhere at your desired place at dubai. We
                  autobatteries.hakstime are dedicated in serving you at our
                  best. We have the best professionals to get you back on the
                  wheel!. Car battery price in dubai may vary according to
                  different service provider but autobatteries.hakstime always
                  ensure to give the battery at best cheap rate to get more
                  customer again and of course with best quality. We deal with
                  best quality car battery in dubai such as Amaron batteries,
                  Solite batteries, Varta batteries, Acdelco batteries.{" "}
                  <Link to="/contact">Contact Now</Link> to get your battery.
                </h1>
              </div>
              <div className="col-md-6">
                <LazyLoadImage
                  alt="car battery dubai"
                  effect="blur"
                  className="img-fluid warranty"
                  src={MJ2}
                />
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
