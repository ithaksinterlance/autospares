import React, { Component } from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import AcdelcoBattery from "../img/product1.webp";
import Amaron from "../img/product3.webp";
import Solite from "../img/product2.webp";
import Varta from "../img/product4.webp";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

export default class Acdelco extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Acdelco battery</title>
          <meta charset="utf-8" />
          <meta
            name="title"
            content="Acdelco battery replacement | Autobatteries.hakstime"
          />
          <meta
            name="description"
            content="Acdelco battery replacement dubai |Acdelco car battery sharjah - best price - onsite battery replacement - Acdelco battery installation - Battery delivery in @dubai - Battery delivery @sharjah - Car battery Replacement | Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. 24/7 support. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta."
          />
          <meta
            name="keywords"
            content="Acdelco battery sharjah, Acdelco car battery dubai, Acdelco best price uae, best car battery price in uae,  car battery replacement , dubai, sharjah, united arab emirates, car battery replacement sharjah, car battery replacement dubai , car battery replacement uae ,car battery change uae, car battery dubai, car battery uae, car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement "
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="author" content="autobatteries.hakstime.com" />
        </MetaTags>
        <Navbar />
        <div className="container battery display-4 text-center py-4">
          ACDELCO BATTERY
        </div>
        <div className="container shadow-lg">
          <div className="row">
            <div className="col-md-5">
              <img
                src={AcdelcoBattery}
                alt="car battery replacement dubai"
                class="img-fluid batteryProd"
              />
              <smal className="small d-flex justify-content-end">
                Sold By hakstime{" "}
              </smal>
            </div>
            <div className="col-md-5">
              <div class="col-md-12">
                <h1 className="heading">Acdelco</h1>
              </div>
              <div className="col-md-12">
                <span className="label label-primary">Acdelco</span>
                <span className="monospaced">No. 00003</span>
              </div>
              <div className="col-md-12">
                <span
                  className="glyphicon glyphicon-star glyph"
                  aria-hidden="true"
                ></span>
                <span
                  class="glyphicon glyphicon-star glyph"
                  aria-hidden="true"
                ></span>
                <span
                  class="glyphicon glyphicon-star glyph"
                  aria-hidden="true"
                ></span>
                <span
                  class="glyphicon glyphicon-star glyph"
                  aria-hidden="true"
                ></span>
                <span
                  class="glyphicon glyphicon-star-empty glyph"
                  aria-hidden="true"
                ></span>
              </div>
              <div className="col-md-12">
                <p className="smal">
                  <span class="label label-success">In Stock</span>
                </p>
                <Link to="/contact" rel="noopener noreferrer" target="_newtab" title="car battery replacement dubai and sharjah">
                  <button type="button" className="btn  btn-success btn-lg">
                    ORDER NOW
                  </button>
                </Link>
              </div>
              <div className="col-md-12 pt-4">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      class="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      title="car battery dubai"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Description
                    </a>
                    <a
                      class="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#nav-profile"
                      title="car battery replacement sharjah"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Feature
                    </a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane  active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    The AC DElco AA batteries performed as good as the much more
                    expensive Duracell and energizer batteries and are well
                    worth buying. This applies if you use a lot of these guy's
                    for remote controls or other small electric battery powered
                    devices.
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    The ACDelco Professional Gold Batteries feature an impact-
                    and break-resistant plastic case for durability, including
                    robust separator envelopes for extended battery life
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="col-md-12 pt-1">Other Battery List</div>
              <div className="col-md-12">
                <Link to="/amaron-battery" title="car battery replacement dubai and sharjah">
                  <img
                    src={Solite}
                    alt="car battery dubai price"
                    className="img-fluid spanbattery"
                  />
                </Link>
              </div>

              <div className="col-md-12" >
                <Link to="/solite-battery" title="car battery replacement dubai and sharjah">
                  <img
                    src={Varta}
                    alt="agm car battery dubai"
                    className="img-fluid spanbattery"
                  />
                </Link>
              </div>
              <div className="col-md-12">
                <Link to="/varta-battery" title="car battery replacement dubai and sharjah">
                  <img
                    src={Amaron}
                    alt="car battery price sharjah"
                    className="img-fluid spanbattery"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
