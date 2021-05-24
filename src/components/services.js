import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CarBattery from "../img/carbattery.jpeg";
import { MetaTags } from "react-meta-tags";

export default class services extends Component {
  render() {
    return (
      <div>
                <MetaTags>
          <title>
            Autobatteries service| Car Battery replacement | Dubai & Sharjah
          </title>
          <meta charset="utf-8" />
          <meta
            name="title"
            content="Car Battery replacement | Dubai & Sharjah"
          />
          <meta
            name="description"
            content="Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service"
          />
          <meta
            name="keywords"
            content="car battery, car battery replacement dubai,car battery replacement sharjah,sharjah, dubai, arab, united arab emirates, uae, mjbattery, dubai car battery replacement, sharjah battery replacement, amaron battery, solite battery, acdelco battery, varta battery,  porsche battery,audi battery,chrevlot battery, battery for kia battery, battery for ranault battery,acura battery,chrysler battery,dodge battery,daewoo battery,ford battery,fiat battery, lexus battery, maserati battery"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="author" content="autobatteries.hakstime.com" />
        </MetaTags>
        <Navbar />
        <div className="container-fluid header-text1 px-0">
          <img
            src={CarBattery}
            alt="car battery"
            className="img-fluid header-img"
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
              <i class="fas fa-screwdriver fa-3x   "></i>
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
