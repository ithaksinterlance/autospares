import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import VartaBattery from "../img/product3.webp";
import Amaron from "../img/product1.webp";
import Solite from "../img/product2.webp";
import Acdelco from "../img/product4.webp";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

export default class Varta extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Autobatteries | Varta battery replacement</title>
          <meta charset="utf-8" />
          <meta
            name="title"
            content="Autobatteries |Varta battery replacement"
          />
          <meta
            name="description"
            content="Varta battery replacement |Varta car battery - best price - onsite battery replacement - Varta battery installation - Battery delivery in @dubai - Battery delivery @sharjah - Car battery Replacement"
          />
          <meta
            name="keywords"
            content="varta battery, varta car battery, varta best price, best car battery price in uae, onsite battery replacement, battery delivery in dubai, battery instalation in dubai, battery delivery in sharjah, battery installation in sharjah, car battery replacement, dubai, sharjah, united arab emirates"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="author" content="autobatteries.hakstime.com" />
        </MetaTags>
        <Navbar />
        <div className="container battery display-4 text-center py-4">
          VARTA BATTERY
        </div>
        <div className="container shadow-lg">
          <div className="row">
            <div className="col-md-5">
              <img
                src={VartaBattery}
                alt="Solite battery replacement"
                class="img-fluid batteryProd"
              />
              <smal className="small d-flex justify-content-end">
                Sold By hakstime{" "}
              </smal>
            </div>
            <div className="col-md-5">
              <div class="col-md-12">
                <h1 className="heading">Varta</h1>
              </div>
              <div class="col-md-12">
                <span class="label label-primary">Varta</span>
                <span class="monospaced">No. 00002</span>
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
                    VARTA Primary Batteries provide the optimal energy solution
                    for all your devices of daily use, from toys to digital
                    cameras to remote controls and many more. To suit every type
                    of energy consumption we developed the VARTA LONGLIFE
                    Primary range.
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    PowerFrame grid technology is designed to minimize the
                    corrosion that leads to battery failure, allowing for you
                    and your vehicle to continue moving. The positive grid is
                    what provides the energy to start your car. It's a critical
                    component of your battery, start after start
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="col-md-12 pt-1">Other Battery List</div>
              <div className="col-md-12">
                <Link to="/acdelco">
                  <img
                    src={Amaron}
                    alt="amaron Battery replacement in dubai"
                    className="img-fluid spanbattery"
                  />
                </Link>
              </div>

              <div className="col-md-12">
                <Link to="/amaron">
                  <img
                    src={Solite}
                    alt="amaron Battery replacement in dubai"
                    className="img-fluid spanbattery"
                  />
                </Link>
              </div>
              <div className="col-md-12">
                <Link to="/solite">
                  <img
                    src={Acdelco}
                    alt="amaron Battery replacement in dubai"
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
