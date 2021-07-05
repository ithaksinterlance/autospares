import React, { Component } from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import AmaronBattery from "../img/product2.webp";
import Solite from "../img/product4.webp";
import Varta from "../img/product1.webp";
import Acdelco from "../img/product3.webp";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/blur.css";

export default class Amaron extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Amaron battery</title>
          <meta charset="utf-8" />
          <meta
            name="title"
            content="Amaron battery replacement | Autobatteries.hakstime"
          />
          <meta
            name="description"
            content="Amaron battery replacement |Amaron car battery - best price - onsite battery replacement - Amaron battery installation - Battery delivery in @dubai - Battery delivery @sharjah - Car battery Replacement dubai | Sharjah- Car battery change Dubai | Sharjah | Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. 24/7 support. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta."
          />
          <meta
            name="keywords"
            content="dubai Amaron battery ,uae Amaron car battery,sharjah Amaron best price, best car battery price uae, battery delivery dubai, battery instalation  dubai, battery delivery sharjah, battery installation sharjah, car battery replacement dubai, united arab emirates, car battery replacement sharjah, car battery replacement dubai, car battery replacement uae ,car battery change uae, car battery dubai, car battery uae, car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement "
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="author" content="autobatteries.hakstime.com" />
        </MetaTags>
        <Navbar />

        <div className="container battery display-4 text-center py-4">
          AMARON BATTERY
        </div>
        <div className="container shadow-lg">
          <div className="row">
            <div className="col-md-5">
              <LazyLoadImage
                alt="car battery replacement sharjah"
                effect="blur"
                className="img-fluid batteryProd"
                src={AmaronBattery}
              />
              <smal className="small d-flex justify-content-end">
                Sold By hakstime{" "}
              </smal>
            </div>
            <div className="col-md-5">
              <div class="col-md-12">
                <h1 className="heading">Amaron</h1>
              </div>
              <div class="col-md-12">
                <span class="label label-primary">Amaron Brand Name</span>
                <span class="monospaced">No. 00001</span>
              </div>
              <div class="col-md-12">
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
                <Link
                  to="/contact"
                  rel="noopener noreferrer"
                  title="car battery replacement dubai and sharjah"
                  target="_newtab"
                >
                  <button type="button" class="btn  btn-success btn-lg">
                    ORDER NOW
                  </button>
                </Link>
              </div>
              <div className="col-md-12 pt-4">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      class="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      title="car battery replacement"
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
                      title="sharjah battery replacement"
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
                    class="tab-pane active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    Amaron is the only battery that contains the patented Silven
                    X alloy. And that's what gives it the power to last long,
                    really long.
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    highest cranking power, vibration resistance, high heat
                    tolerance, highest reserve capacity and patented BIC vents
                    for enhanced safety.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="col-md-12 pt-1">Other Battery List</div>
              <div className="col-md-12">
                <Link
                  to="/solite-battery"
                  title="car battery replacement dubai and sharjah"
                >
                  <img
                    src={Solite}
                    alt="car battery change dubai"
                    className="img-fluid spanbattery"
                  />
                </Link>
              </div>

              <div className="col-md-12">
                <Link
                  to="/acdelco-battery"
                  title="car battery replacement dubai and sharjah"
                >
                  <img
                    src={Varta}
                    alt="car battery replacement sharjah"
                    className="img-fluid spanbattery"
                  />
                </Link>
              </div>
              <div className="col-md-12">
                <Link
                  to="/varta-battery"
                  title="car battery replacement dubai and sharjah"
                >
                  <img
                    src={Acdelco}
                    alt="car battery change dubai"
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
