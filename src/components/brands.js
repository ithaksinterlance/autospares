import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Battery1 from "../img/product1.webp";
import Battery2 from "../img/product2.webp";
import Battery3 from "../img/product3.webp";
import Battery4 from "../img/product4.webp";
import { Helmet } from "react-helmet";

export default class brands extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Car Battery replacement</title>
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
            content="battery, car battery, battery replacement dubai, battery replacement near me, car battery replacement near me, car battery replacement in dubai, car battery replacement in sharjah,car battery replacement dubai, car battery replacement sharjah, car battery replacement service dubai"
          />
          <link rel="canonical" href="https://autobatteries.hakstime.com/" />
        </Helmet>
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
                    title="car battery replacement"
                  >
                    CALL NOW {">>"}
                  </a>
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
                    title="car battery replacement"
                  >
                    CALL NOW {">>"}
                  </a>
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
                    title="car battery replacement"
                  >
                    CALL NOW {">>"}
                  </a>
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
                    title="car battery replacement"
                  >
                    CALL NOW {">>"}
                  </a>
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
