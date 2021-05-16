import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SoliteBattery from "../img/product4.webp";
import Amaron from "../img/product1.webp";
import Varta from "../img/product2.webp";
import Acdelco from "../img/product3.webp";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

export default class Solite extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Autobatteries |Solite battery replacement</title>
          <meta
            name="title"
            content="Autobatteries |Solite battery replacement"
          />
          <meta
            name="description"
            content="Solite battery replacement |Solite car battery - best price - onsite battery replacement - Solite battery installation - Battery delivery in @dubai - Battery delivery @sharjah - Car battery Replacement"
          />
        </MetaTags>
        <Navbar />
        <div className="container battery display-4 text-center py-4">
          SOLITE BATTERY
        </div>
        <div className="container shadow-lg">
          <div className="row">
            <div className="col-md-5">
              <img
                src={SoliteBattery}
                alt="Solite battery replacement"
                class="img-fluid batteryProd"
              />
              <smal className="small d-flex justify-content-end">
                Sold By hakstime{" "}
              </smal>
            </div>
            <div className="col-md-5">
              <div class="col-md-12">
                <h1 className="heading">Solite</h1>
              </div>
              <div class="col-md-12">
                <span class="label label-primary">Solite</span>
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
                    Solite is a very common brand in the UAE due to its
                    ruggedness and ability to withstand all weather conditions
                    as they come. Solite has proven to be a reliable car battery
                    over the years, it has a very high rating and numerous
                    positive reviews from previously purchased units.
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    Highest resistance to plate corrosion Longer life of battery
                    Highest resistance to plate damage Reduce Water Loss by 90%
                    New Plate Grid Design Improved CCA, AH and Reserve capacity
                    outputs
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
