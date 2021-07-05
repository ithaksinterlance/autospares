import React, { Component } from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import SoliteBattery from "../img/product4.webp";
import Amaron from "../img/product1.webp";
import Varta from "../img/product2.webp";
import Acdelco from "../img/product3.webp";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/blur.css";

export default class Solite extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Solite battery</title>
          <meta charset="utf-8" />
          <meta
            name="title"
            content="Solite battery | Autobatteries.hakstime"
          />
          <meta
            name="description"
            content="Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. 24/7 support. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta."
          />
          <meta
            name="keywords"
            content="dubai Solite battery,sharjah solite battery, Solite car battery, Solite best price, best car battery price uae,  battery delivery dubai, battery instalation dubai, battery delivery sharjah, battery installation sharjah, car battery replacement dubai, united arab emirates, car battery replacement sharjah, car battery replacement dubai, car battery replacement uae ,car battery change, car battery dubai, car battery uae, car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="author" content="autobatteries.hakstime.com" />
        </MetaTags>
        <Navbar />
        <div className="container battery display-4 text-center py-4">
          SOLITE BATTERY
        </div>
        <div className="container shadow-lg">
          <div className="row">
            <div className="col-md-5">
              <LazyLoadImage
                alt="car battery replacement dubai"
                effect="blur"
                className="img-fluid batteryProd"
                src={SoliteBattery}
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
                      title="car battery replacement sharjah"
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
                      title="battery change dubai"
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
