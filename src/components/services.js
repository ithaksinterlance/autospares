import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CarBattery from "../img/carbattery.jpeg";

export default class services extends Component {
  render() {
    return (
      <div>
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
          <h2 className="nav1">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            We provide Car battery Replacement services ANYTIME at Dubai and
            Sharjarh. <i class="fa fa-quote-right" aria-hidden="true"></i>
          </h2>
        </div>
        <div className="container pt-5 text-center">
          <hr />
          <h2 className="heading">SERVICES</h2>
          <hr />
        </div>
        <div className="container pt-5 text-center">
          <div className="row">
            <div className="col-md-4">
              <i class="fab fa-whatsapp fa-3x " aria-hidden="true"></i>
              <br />
              <p className="paragraph">
                Send Your Location &<br /> Contact No.
              </p>
            </div>
            <div className="col-md-4">
              <i class="fa fa-quote-right fa-3x " aria-hidden="true"></i>
              <br />
              <p className="paragraph"> Get Best Quote</p>
            </div>
            <div className="col-md-4">
              <i class="fas fa-car-battery fa-3x" aria-hidden="true"></i>
              <br />
              <p className="paragraph">
                Get Battery
                <br /> installed at Your
                <br /> designation location{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-5 text-center">
          <div className="row">
            <div className="col-md-4">
              <i class="fas fa-clock   fa-3x "></i>
              <br />
              <p className="paragraph">ANY TIME</p>
            </div>
            <div className="col-md-4">
              <i class="fas fa-screwdriver fa-3x   "></i>
              <br />
              <p className="paragraph">PROFESSIONAL SERVICE</p>
            </div>
            <div className="col-md-4">
              <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>
              <br />
              <p className="paragraph">AT DUBAI AND SHARJAH</p>
            </div>
          </div>
        </div>
        <p className="container text-danger">
          **We deal only with genuine brands namely SOLITE. ACDELCO, AMARON,
          VARTA and other genuine and authentic battery batteries depending on
          the demand for our battery supply and replacement services.**
        </p>

        <Footer />
      </div>
    );
  }
}
