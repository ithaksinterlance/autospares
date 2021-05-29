import React, { Component } from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import AmaronBattery from "../img/product2.webp";
import Solite from "../img/product4.webp";
import Varta from "../img/product1.webp";
import Acdelco from "../img/product3.webp";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

export default class Amaron extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Autobatteries |Amaron battery replacement</title>
          <meta charset="utf-8" />
          <meta
            name="title"
            content="Autobatteries |Amaron battery replacement"
          />
          <meta
            name="description"
            content="Amaron battery replacement |Amaron car battery - best price - onsite battery replacement - Amaron battery installation - Battery delivery in @dubai - Battery delivery @sharjah - Car battery Replacement"
          />
          <meta
            name="keywords"
            content="Amaron battery, Amaron car battery, Amaron best price, best car battery price in uae, onsite battery replacement, battery delivery in dubai, battery instalation in dubai, battery delivery in sharjah, battery installation in sharjah, car battery replacement,dubai, sharjah, united arab emirates"
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
              <img
                src={AmaronBattery}
                alt="amaron battery"
                class="img-fluid batteryProd"
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
                <Link to="/contact" rel="noopener noreferrer" target="_newtab">
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
                      title="car battery replacement"
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
                <Link to="/solite-battery">
                  <img
                    src={Solite}
                    alt="solite Battery replacement in dubai"
                    className="img-fluid spanbattery"
                  />
                </Link>
              </div>

              <div className="col-md-12">
                <Link to="/acdelco-battery">
                  <img
                    src={Varta}
                    alt="varta battery"
                    className="img-fluid spanbattery"
                  />
                </Link>
              </div>
              <div className="col-md-12">
                <Link to="/varta-battery">
                  <img
                    src={Acdelco}
                    alt="acdelco battery"
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
