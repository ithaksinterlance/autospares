import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AmaronBattery from "../img/product1.jpg";

export default class Amaron extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div
          className="heading2 display-4 text-center"
          style={{ paddingLeft: "10px" }}
        >
          AMARON BATTERY
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={AmaronBattery}
                alt="Amaron"
                class="img-fluid batteryProd"
              />
              <smal className="small d-flex justify-content-end">
                Sold By hakstime{" "}
              </smal>
            </div>
            <div className="col-md-6">
              <div class="col-md-12">
                <h1 className="heading">Amaron</h1>
              </div>
              <div class="col-md-12">
                <span class="label label-primary">Amaron Brand Name</span>
                <span class="monospaced">No. 00001</span>
              </div>
              <div class="col-md-3">
                <span class="sr-only">Four out of Five Stars</span>
                <span
                  class="glyphicon glyphicon-star"
                  aria-hidden="true"
                ></span>
                <span
                  class="glyphicon glyphicon-star"
                  aria-hidden="true"
                ></span>
                <span
                  class="glyphicon glyphicon-star"
                  aria-hidden="true"
                ></span>
                <span
                  class="glyphicon glyphicon-star"
                  aria-hidden="true"
                ></span>
                <span
                  class="glyphicon glyphicon-star-empty"
                  aria-hidden="true"
                ></span>
                <span class="label label-success">61</span>
              </div>
              <div className="col-md-12">
                <p className="paragraph">M.R.P : د.إ 1500</p>
                <p className="paragraph">
                  Price :د.إ 900&nbsp; + د.إ 100 Delivery charges
                </p>
                <p className="smal">
                  <span class="label label-success">In Stock</span>
                </p>
                <button type="button" class="btn btn-primary">
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
