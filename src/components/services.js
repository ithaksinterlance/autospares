import React, { Component } from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import CarBattery from "../img/carbattery.webp";
import { MetaTags } from "react-meta-tags";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/blur.css";

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
            content="car battery replacement sharjah, car battery replacement dubai, car battery replacement uae ,car battery change, car battery dubai, car battery uae, car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement"
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
        <div className="container pt-5 text-center">
          <h1 className="nav1">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            We provide Car battery Replacement services ANYTIME at Dubai and
            Sharjarh. <i class="fa fa-quote-right" aria-hidden="true"></i>
          </h1>
        </div>
        <div className="container pt-5 text-center">
          <hr />
          <h1 className="heading">SERVICES</h1>
          <hr />
        </div>
        <div className="container pt-5 text-center">
          <div className="row">
            <div className="col-md-4">
              <i class="fab fa-whatsapp fa-3x " aria-hidden="true"></i>
              <br />
              <h1 className="paragraph">
                Send Your Location &<br /> Contact No.
              </h1>
            </div>
            <div className="col-md-4">
              <i class="fa fa-quote-right fa-3x " aria-hidden="true"></i>
              <br />
              <h1 className="paragraph"> Get Best Quote</h1>
            </div>
            <div className="col-md-4">
              <i class="fas fa-car-battery fa-3x" aria-hidden="true"></i>
              <br />
              <h1 className="paragraph">
                Get Battery
                <br /> installed at Your
                <br /> designation location{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="container pt-5 text-center">
          <div className="row">
            <div className="col-md-4">
              <i class="fas fa-clock   fa-3x "></i>
              <br />
              <h1 className="paragraph">ANY TIME</h1>
            </div>
            <div className="col-md-4">
              <i class="fas fa-screwdriver fa-3x"></i>
              <br />
              <h1 className="paragraph">PROFESSIONAL SERVICE</h1>
            </div>
            <div className="col-md-4">
              <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>
              <br />
              <h1 className="paragraph">AT DUBAI AND SHARJAH</h1>
            </div>
          </div>
        </div>
        <p className="container text-danger">
          **We deal only with genuine brands namely SOLITE. ACDELCO, AMARON,
          VARTA and other genuine and authentic battery batteries depending on
          the demand for our battery supply and replacement services.**
        </p>
        <div className="text-center">
          <Footer />
        </div>
      </div>
    );
  }
}
