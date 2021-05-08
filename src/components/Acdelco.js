import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AcdelcoBattery from "../img/product1.webp";
import Amaron from "../img/product3.webp";
import Solite from "../img/product2.webp";
import Varta from "../img/product4.webp";
import { Link } from "react-router-dom";

export default class Acdelco extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container battery display-4 text-center py-4">
          ACDELCO BATTERY
        </div>
        <div className="container shadow-lg">
          <div className="row">
            <div className="col-md-5">
              <img
                src={AcdelcoBattery}
                alt="Solite battery replacement"
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
              <div class="col-md-12">
                <span class="label label-primary">Acdelco</span>
                <span class="monospaced">No. 00003</span>
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
                <Link to="/amaron">
                  <img
                    src={Solite}
                    alt="amaron Automotive car battery"
                    className="img-fluid spanbattery"
                  />
                </Link>
              </div>

              <div className="col-md-12">
                <Link to="/solite">
                  <img
                    src={Varta}
                    alt="amaron car Battery replacement in dubai"
                    className="img-fluid spanbattery"
                  />
                </Link>
              </div>
              <div className="col-md-12">
                <Link to="/varta">
                  <img
                    src={Amaron}
                    alt="Solite car Battery replacement in dubai"
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
