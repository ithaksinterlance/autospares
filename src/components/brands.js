import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Battery1 from "../img/product1.jpg";
import Battery2 from "../img/product2.jpg";
import Battery3 from "../img/product3.jpg";
import Battery4 from "../img/product4.png";

export default class brands extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12 pt-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src={Battery1} alt="car battery replacement in dubai" />
                <div class="card-body">
                  <h5 class="card-title">ACDELCO</h5>
                  <a href="/" class="btn btn-danger btn-lg">
                    BUY NOW {">>"}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 pt-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src={Battery2} alt="car battery replacement in dubai" />
                <div class="card-body">
                  <h5 class="card-title">AMARON</h5>

                  <a href="/" class="btn btn-danger btn-lg">
                    BUY NOW {">>"}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 pt-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src={Battery3} alt="car battery replacement in dubai" />
                <div class="card-body">
                  <h5 class="card-title">VARTA</h5>

                  <a href="/" class="btn btn-danger btn-lg">
                    BUY NOW {">>"}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 pt-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src={Battery4} alt="car battery replacement in dubai" />
                <div class="card-body">
                  <h5 class="card-title">SOLITE</h5>

                  <a href="/" class="btn btn-danger btn-lg">
                    BUY NOW {">>"}
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
