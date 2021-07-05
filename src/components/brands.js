import React, { Component } from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import Battery1 from "../img/product1.webp";
import Battery2 from "../img/product2.webp";
import Battery3 from "../img/product3.webp";
import Battery4 from "../img/product4.webp";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/blur.css";

export default class brands extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MetaTags>
          <meta charSet="utf-8" />
          <title>Autobatteries.hakstime</title>
          <meta
            name="title"
            content="Car Battery Dubai & Sharjah | Autobatteries.hakstime"
          />
          <meta
            name="description"
            content="Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. 24/7 support. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta."
          />
          <meta
            name="keywords"
            content="car battery replacement sharjah, car battery replacement dubai, car battery replacement uae ,car battery change, car battery dubai, car battery uae, car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement"
          />
          <link rel="canonical" href="https://autobatteries.hakstime.com/car-battery-brands" />
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
                  <Link to="/acdelco-battery" title="acdelco battery replacement in dubai and sharjah">
                    <div className="text-center">
                      <p className="paragraph">Read {">>"}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 pt-3">
              <div class="card" style={{ width: "18rem" }}>
                <LazyLoadImage
                    alt="car battery dubai"
                    effect="blur"
                    src={Battery2}
                  />
                <div class="card-body">
                  <h5 class="card-title">AMARON</h5>

                  <a
                    href="tel:971551478994"
                    class="btn btn-danger btn-lg"
                    title="car battery replacement dubai"
                  >
                    CALL NOW {">>"}
                  </a>
                  <Link to="/amaron-battery" title="amaron battery replacement in dubai and sharjah">
                    <div className="text-center">
                      <p className="paragraph">Read {">>"}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 pt-3">
              <div class="card" style={{ width: "18rem" }}>
                <LazyLoadImage
                    alt="car battery replacement sharjah"
                    effect="blur"
                    src={Battery3}
                  />
                <div class="card-body">
                  <h5 class="card-title">VARTA</h5>

                  <a
                    href="tel:971551478994"
                    class="btn btn-danger btn-lg"
                    title="varta battery replacement in dubai and sharjah"
                  >
                    CALL NOW {">>"}
                  </a>
                  <Link to="/varta-battery" title="car battery near me">
                    <div className="text-center">
                      <p className="paragraph">Read {">>"}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 pt-3">
              <div class="card" style={{ width: "18rem" }}>
                <LazyLoadImage
                    alt="car battery replacement dubai"
                    effect="blur"
                    className="card-img-top"
                    src={Battery4}
                  />
                <div class="card-body">
                  <h5 class="card-title">SOLITE</h5>

                  <a
                    href="tel:971551478994"
                    class="btn btn-danger btn-lg"
                    title="solite"
                  >
                    CALL NOW {">>"}
                  </a>
                  <Link to="/solite-battery" title="car battery near me">
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
