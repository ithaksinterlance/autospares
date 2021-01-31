import React, { Component } from "react";
import Navbar from "./Navbar";
import Car3 from "../img/service3.jpg";
import Prod1 from "../img/product1.jpg";
import Prod2 from "../img/product2.jpg";
import Prod3 from "../img/product3.jpg";
import Prod4 from "../img/product4.png";
import MJ from "../img/mj.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.submituserInquiryForm = this.submituserInquiryForm.bind(this);
  }
  submituserInquiryForm() {
    var submitted = true;
    if ((submitted = true)) {
      alert("Form submitted! We will contact you soon.");
      window.location.reload();
      return submitted;
    }
  }
  render() {
    return (
      <div>
        <Navbar />

        <div className="container-fluid header-text1 px-0">
          <img
            src={Car3}
            alt="battery replacement"
            className="img-fluid header-img "
          />
          <div className="header-text display-4">
            Lorem Ipsum is simply dummy text of the
            <br /> printing and typesetting industry.
            <p className="lead" style={{ color: "white" }}>
              Dubai's No 1 Battery Replacement Service
            </p>
            <div className="d-flex p-2">
              <a class="btn btn-primary p-2" href="/" role="button">
                Buy for Wholesale
              </a>
              <a class="btn btn-primary p-2" href="/" role="button">
                Buy for Retailsale
              </a>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row padding d-flex justify-content-center">
            <div class="col-md-3 top-right flex-end pt-4">
              <iframe
                title="form"
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: "none" }}
              ></iframe>
              <form
                id="myForm"
                action="https://docs.google.com/forms/d/e/1FAIpQLSd6fL_M5hLUjjBLJyMFWUijW2qNrGwQ0RxMVhpmTOEEqj3Jxg/formResponse"
                method="POST"
                onSubmit={this.submituserInquiryForm}
                class="mx-2 my-2"
                target="hidden_iframe"
              >
                <div class="form-group">
                  <small id="Year" class="form-text text-muted">
                    Year
                  </small>
                  <input
                    type="text"
                    name="entry.1437758037"
                    class="form-control fa fa-calendar-alt"
                    aria-describedby="Year"
                    placeholder="&#xf073; Year"
                    required
                  />
                </div>
                <div class="form-group">
                  <small id="CarBatteryModel" class="form-text text-muted">
                    Car Brand Model Trim
                  </small>
                  <input
                    type="text"
                    name="entry.1911907904"
                    class="form-control fa fa-car"
                    aria-describedby="CarBatteryModel"
                    placeholder="&#xf1b9; Car Brand Model Trim"
                    required
                  />
                </div>
                <div class="form-group">
                  <small id="AreaName" class="form-text text-muted">
                    Area Name, Emirate *
                  </small>
                  <input
                    type="text"
                    name="entry.1153362739"
                    class="form-control fa fa-map-marker"
                    aria-describedby="AreaName"
                    placeholder="&#xf041; Area Name, Emirate"
                    required
                  />
                </div>
                <div class="form-group">
                  <small id="ContactNo" class="form-text text-muted pt-3">
                    Contact Number (971_________){" "}
                  </small>
                  <input
                    type="text"
                    name="entry.153243795"
                    class="form-control fa fa-phone"
                    aria-describedby="ContactNo"
                    placeholder="&#xf095; Contact Number (971_________)"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-danger btn-lg btn-block pb-3"
                  target="_self"
                >
                  <i class="fa fa-whatsapp" aria-hidden="true">
                    &nbsp;&nbsp;SEND
                  </i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container pt-4  form-phone">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-sm-12 col-lg-4 col-xs-12">
              <div className="container">
                <hr />
                <h2 className="heading">Send Inquiries</h2>
                <hr />
              </div>
              <iframe
                title="form"
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: "none" }}
              ></iframe>
              <form
                method="POST"
                id="myForm"
                action="https://docs.google.com/forms/d/e/1FAIpQLSd6fL_M5hLUjjBLJyMFWUijW2qNrGwQ0RxMVhpmTOEEqj3Jxg/formResponse"
                onSubmit={this.submituserInquiryForm}
                class="mx-2 my-2"
                target="hidden_iframe"
              >
                <div class="form-group">
                  <small id="Year" class="form-text text-muted">
                    Year
                  </small>
                  <input
                    type="text"
                    name="entry.1437758037"
                    class="form-control fa fa-calendar-alt"
                    aria-describedby="Year"
                    placeholder="&#xf073; Year"
                    required
                  />
                </div>
                <div class="form-group">
                  <small id="CarBatteryModel" class="form-text text-muted">
                    Car Brand Model Trim
                  </small>
                  <input
                    type="text"
                    name="entry.1911907904"
                    class="form-control fa fa-car"
                    aria-describedby="CarBatteryModel"
                    placeholder="&#xf1b9; Car Brand Model Trim"
                    required
                  />
                </div>
                <div class="form-group">
                  <small id="AreaName" class="form-text text-muted">
                    Area Name, Emirate *
                  </small>
                  <input
                    type="text"
                    name="entry.1153362739"
                    class="form-control fa fa-map-marker"
                    aria-describedby="AreaName"
                    placeholder="&#xf041; Area Name, Emirate"
                    required
                  />
                </div>
                <div class="form-group">
                  <small id="ContactNo" class="form-text text-muted pt-3">
                    Contact Number (971_________){" "}
                  </small>
                  <input
                    type="text"
                    name="entry.153243795"
                    class="form-control fa fa-phone"
                    aria-describedby="ContactNo"
                    placeholder="&#xf095; Contact Number (971_________)"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-danger btn-lg btn-block pb-3"
                  target="_self"
                >
                  <i class="fa fa-whatsapp" aria-hidden="true">
                    &nbsp;&nbsp;SEND
                  </i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container pt-5 text-center">
          <div className="row">
            <div className="col-md-4 ">
              <i class="fa fa-3x fa-map-marker" aria-hidden="true"></i>
              <br />
              <p className="paragraph">
                Send Your Location &<br /> Contact No.
              </p>
            </div>
            <div className="col-md-4">
              <i class="fa fa-3x fa-quote-right" aria-hidden="true"></i>
              <br />
              <p className="paragraph"> Get Best Quote</p>
            </div>
            <div className="col-md-4">
              <i class="fa fa-3x fa-location-arrow" aria-hidden="true"></i>
              <br />
              <p className="paragraph">
                Get Battery
                <br /> installed at Your
                <br /> designation location{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6">
              <hr />
              <h2 className="heading">Onsite Battery Replacement</h2>
              <hr />
              <p className="lead">
                <ul className="list">
                  <li className="pt-2">Vehicle Details or Battery Details</li>
                  <li className="pt-2">Send Your Location & Contact No.</li>
                  <li className="pt-2">We Quote the best price</li>
                  <li className="pt-2">
                    Battery is delivered and installed at your designated
                    location
                  </li>
                  <li className="pt-2">Warranty included</li>
                  <li className="pt-2">
                    Delivered anywhere in Dubai & Sharjah , United Arab Emirates
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={MJ}
                alt="battery replacement"
                className="img-fluid warranty"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
          <h2 className="heading">Our Brands</h2>
          <hr />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <Link to="/acedelco">
                <a href="/">
                  <img
                    src={Prod1}
                    alt="battery replacement"
                    className="img-fluid battery"
                  />
                  <div className="text-center">
                    <p className="paragraph">Read {">>"}</p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-xs-6">
              <Link to="/amaron">
                <a href="/">
                  <img
                    src={Prod2}
                    alt="battery replacement"
                    className="img-fluid battery"
                  />
                  <div className="text-center">
                    <p className="paragraph">Read {">>"}</p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-xs-6">
              <Link to="/varta">
                <a href="/">
                  <img
                    src={Prod3}
                    alt="battery replacement"
                    className="img-fluid battery"
                  />
                  <div className="text-center">
                    <p className="paragraph">Read {">>"}</p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-xs-6">
              <Link to="/solite">
                <a href="/">
                  <img
                    src={Prod4}
                    alt="battery replacement"
                    className="img-fluid battery"
                  />
                  <div className="text-center">
                    <p className="paragraph">Read {">>"}</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
