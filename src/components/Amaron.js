import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AmaronBattery from "../img/product2.webp";
import Solite from "../img/product4.webp";
import Varta from "../img/product1.webp";
import Acdelco from "../img/product3.webp";
import { Link } from "react-router-dom";

export default class Amaron extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container battery display-4 text-center py-4">
          AMARON BATTERY
        </div>
        <div className="container shadow-lg">
          <div className="row">
            <div className="col-md-5">
              <img
                src={AmaronBattery}
                alt="Amaron"
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
                <button type="button" class="btn  btn-success btn-lg">
                  ORDER NOW
                </button>
              </div>
              <div className="col-md-12 pt-4">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      class="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
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
                    The Amara Raja Group is known for its automotive battery
                    brand Amaron, the second largest selling automotive battery
                    brand in India after Exide Industries.Amaron is the only
                    battery that contains the patented Silven X alloy. And
                    that's what gives it the power to last long, really long.
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
                <Link to="/solite">
                  <img
                    src={Solite}
                    alt="solite Battery replacement in dubai"
                    className="img-fluid spanbattery"
                  />
                </Link>
              </div>

              <div className="col-md-12">
                <Link to="/acdelco">
                  <img
                    src={Varta}
                    alt="amaron Battery replacement in dubai"
                    className="img-fluid spanbattery"
                  />
                </Link>
              </div>
              <div className="col-md-12">
                <Link to="/varta">
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
