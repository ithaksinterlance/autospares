import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Battery1 from "../img/product1.webp";
import Battery2 from "../img/product2.webp";
import Battery3 from "../img/product3.webp";
import Battery4 from "../img/product4.webp";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

export default class brands extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MetaTags>
          <meta charSet="utf-8" />
          <title>Autobatteries | Car battery brands</title>
          <meta
            name="title"
            content="Car Battery replacement DUBAI| Replace your car battery at anytime at Dubai and Sharjah. We offer the best battery replacement service"
          />
          <meta
            name="description"
            content="Replace your car battery at anytime at Dubai and Sharjah. We offer the best battery replacement service"
          />
          <meta
            name="keywords"
            content="amaron battery, solite battery, acdelco battery, varta battery,  porsche battery,audi battery,chrevlot battery, battery for kia battery, battery for ranault battery,acura battery,chrysler battery,dodge battery,daewoo battery,ford battery,fiat battery, lexus battery, maserati battery"
          />
          <link rel="canonical" href="https://autobatteries.hakstime.com/#/car-battery-brands" />
        </MetaTags>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12 pt-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src={Battery1} alt="car battery replacement in dubai" />
                <div class="card-body">
                  <h5 class="card-title">ACDELCO</h5>
                  <a
                    href="tel:971551478994"
                    class="btn btn-danger btn-lg"
                    title="acdelco battery replacement in dubai and sharjah"
                  >
                    CALL NOW {">>"}
                  </a>
                  <Link to="/acdelco" title="acdelco battery replacement in dubai and sharjah">
                    <div className="text-center">
                      <p className="paragraph">Read {">>"}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 pt-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src={Battery2} alt="car battery replacement in dubai" />
                <div class="card-body">
                  <h5 class="card-title">AMARON</h5>

                  <a
                    href="tel:971551478994"
                    class="btn btn-danger btn-lg"
                    title="car battery replacement dubai"
                  >
                    CALL NOW {">>"}
                  </a>
                  <Link to="/amaron" title="amaron battery replacement in dubai and sharjah">
                    <div className="text-center">
                      <p className="paragraph">Read {">>"}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 pt-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src={Battery3} alt="car battery replacement in dubai" />
                <div class="card-body">
                  <h5 class="card-title">VARTA</h5>

                  <a
                    href="tel:971551478994"
                    class="btn btn-danger btn-lg"
                    title="varta battery replacement in dubai and sharjah"
                  >
                    CALL NOW {">>"}
                  </a>
                  <Link to="/varta" title="car battery near me">
                    <div className="text-center">
                      <p className="paragraph">Read {">>"}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 pt-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src={Battery4} alt="car battery replacement in dubai" />
                <div class="card-body">
                  <h5 class="card-title">SOLITE</h5>

                  <a
                    href="tel:971551478994"
                    class="btn btn-danger btn-lg"
                    title="solite"
                  >
                    CALL NOW {">>"}
                  </a>
                  <Link to="/solite" title="car battery near me">
                    <div className="text-center">
                      <p className="paragraph">Read {">>"}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
