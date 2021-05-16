import React, { Component } from "react";
import Navbar from "./Navbar";
import Prod1 from "../img/product1.webp";
import Prod2 from "../img/product2.webp";
import Prod3 from "../img/product3.webp";
import Prod4 from "../img/product4.webp";
import MJ from "../img/mj.webp";
import Green from "../img/greencar.webp";
import Road from "../img/road.webp";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import MetaTags from "react-meta-tags";

export default class Home extends Component {
  submit() {
    var year1 = document.getElementById("year1").value;
    var carbattery1 = document.getElementById("carbattery1").value;
    var area1 = document.getElementById("area1").value;
    var contactno1 = document.getElementById("contactno1").value;
    var submitted = true;

    if (year1 === "") {
      submitted = false;
      document.getElementById("yearerror1").innerHTML =
        "** Please fill the year";
      //return false;
    } else if (!year1.match([0 - 9]) && year1.length < 4) {
      submitted = false;
      document.getElementById("yearerror1").innerHTML =
        "** Must be a number or 4 digit number";
      //return false;
    } else if (carbattery1 === "") {
      submitted = false;
      document.getElementById("carbatteryerror1").innerHTML =
        "** Please fill the Battery Model";
      //return false;
    } else if (area1 === "") {
      submitted = false;
      document.getElementById("areaerror1").innerHTML =
        "** Please fill the Area";
      //return false;
    } else if (contactno1 === "") {
      submitted = false;
      document.getElementById("contactnoerror1").innerHTML =
        "** Please fill the Contact";
      //return false;
    } else if (isNaN(contactno1)) {
      submitted = false;
      document.getElementById("contactnoerror1").innerHTML =
        "** Check Your contact no";
      //return false;
    } else {
      if (submitted) {
        Swal.fire("Form submitted. We will contact you shortly ;)").then(() =>
          document.getElementById("miForm").onreset(window.location.reload())
        );
        return submitted;
      }
    }
  }

  submituserInquiryForm() {
    var year = document.getElementById("year").value;
    var carbattery = document.getElementById("carbattery").value;
    var area = document.getElementById("area").value;
    var contactno = document.getElementById("contactno").value;
    var submitted = true;

    if (year === "") {
      submitted = false;
      document.getElementById("yearerror").innerHTML =
        "** Please fill the year";
      //return false;
    } else if (!year.match([0 - 9]) && year.length < 4) {
      submitted = false;
      document.getElementById("yearerror").innerHTML =
        "** Must be a number or 4 digit number";
      //return false;
    } else if (carbattery === "") {
      submitted = false;
      document.getElementById("carbatteryerror").innerHTML =
        "** Please fill the Battery Model";
      //return false;
    } else if (area === "") {
      submitted = false;
      document.getElementById("areaerror").innerHTML =
        "** Please fill the Area";
      //return false;
    } else if (contactno === "") {
      submitted = false;
      document.getElementById("contactnoerror").innerHTML =
        "** Please fill the Contact";
      //return false;
    } else if (isNaN(contactno)) {
      submitted = false;
      document.getElementById("contactnoerror").innerHTML =
        "** Check Your contact no";
      //return false;
    } else {
      if (submitted) {
        Swal.fire("Form submitted. We will contact you shortly ;)").then(() =>
          document.getElementById("miForm").onreset(window.location.reload())
        );
        return submitted;
      }
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <MetaTags>
          <title>
            Autobatteries |Car Battery replacement | Dubai & Sharjah
          </title>
          <meta charset="utf-8" />
          <meta
            name="title"
            content="Car Battery replacement | Dubai & Sharjah"
          />
          <meta
            name="description"
            content="Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service"
          />
          <meta
            name="keywords"
            content="battery, car battery replacement dubai, battery replacement near me, car battery replacement near me, mjbattery, dubai car battery replacement, sharjah battery replacement, battery for porsche, battery for audi, battery for chrevlot, battery for kia, battery for ranault, battery for acura, battery for chrysler, battery for dodge, battery for daewoo, battery for ford, battery for fiat"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="author" content="autobatteries.hakstime.com" />
        </MetaTags>
        <div className="container-fluid header-text1 px-0">
          <img
            src={Road}
            alt="battery replacement"
            className="img-fluid header-img"
          />
          <a
            href="https://api.whatsapp.com/send?phone=971551478994?text='Hello! I need price details'"
            title="car battery replacement"
          >
            <img
              src={Green}
              alt="battery replacement"
              className="img-fluid green"
            />
          </a>
          <div
            className="header-text display-4"
            style={{ paddingLeft: "10px" }}
          >
            CAR BATTERY REPLACEMENT SERVICE AT DUBAI AND SHARJAH
          </div>
        </div>
        <div class="container-fluid">
          <div class="row padding d-flex justify-content-center">
            <div class="col-md-3 top-right flex-end pt-4">
              <iframe
                title="car battery replacement uae"
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: "none" }}
              ></iframe>
              <form
                id="myForm"
                method="POST"
                action="https://docs.google.com/forms/d/e/1FAIpQLSd6fL_M5hLUjjBLJyMFWUijW2qNrGwQ0RxMVhpmTOEEqj3Jxg/formResponse"
                onSubmit={this.submituserInquiryForm}
                class="mx-2 my-2 formtab"
                target="hidden_iframe"
              >
                <div class="form-group">
                  <small id="Year" class="form-text text-muted">
                    <i class="fas fa-calendar-alt"></i> Year
                  </small>
                  <input
                    type="text"
                    name="entry.1437758037"
                    id="year"
                    class=" form-control"
                    aria-describedby="Year"
                    placeholder=" Year"
                    autoComplete="off"
                  />
                  <div>
                    <span
                      id="yearerror"
                      className="text-danger font-weight-bold"
                    ></span>
                  </div>
                </div>
                <div class="form-group">
                  <small id="CarBatteryModel" class="form-text text-muted">
                    <i class="fas fa-car-battery"></i> Car Brand Model Trim
                  </small>
                  <input
                    type="text"
                    name="entry.1911907904"
                    id="carbattery"
                    class="form-control "
                    aria-describedby="CarBatteryModel"
                    placeholder=" Car Brand Model Trim"
                    autoComplete="off"
                  />
                  <div>
                    <span
                      id="carbatteryerror"
                      className="text-danger font-weight-bold"
                    ></span>
                  </div>
                </div>
                <div class="form-group">
                  <small id="AreaName" class="form-text text-muted">
                    <i class="fa fa-map-marker" aria-hidden="true"></i> Area
                    Name, Emirate *
                  </small>
                  <input
                    type="text"
                    name="entry.1153362739"
                    id="area"
                    class="form-control "
                    aria-describedby="AreaName"
                    placeholder=" Area Name, Emirate"
                    autoComplete="off"
                  />
                  <div>
                    <span
                      id="areaerror"
                      className="text-danger font-weight-bold"
                    ></span>
                  </div>
                </div>
                <div class="form-group">
                  <small id="ContactNo" class="form-text text-muted pt-3">
                    <i class="fa fa-phone" aria-hidden="true"></i> Contact
                    Number (971_________){" "}
                  </small>
                  <input
                    type="text"
                    name="entry.153243795"
                    id="contactno"
                    class="form-control "
                    aria-describedby="ContactNo"
                    placeholder="Contact Number (971_________)"
                    autoComplete="off"
                  />
                  <div>
                    <span
                      id="contactnoerror"
                      className="text-danger font-weight-bold"
                    ></span>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-danger btn-lg btn-block pb-3"
                  target="_self"
                >
                  <i class="fab fa-whatsapp"></i>
                  &nbsp;&nbsp;SEND
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="container pt-4  form-phone">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-sm-12 col-lg-4 col-xs-12">
              <div className="container pt-5">
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
                id="miForm"
                method="POST"
                action="https://docs.google.com/forms/d/e/1FAIpQLSd6fL_M5hLUjjBLJyMFWUijW2qNrGwQ0RxMVhpmTOEEqj3Jxg/formResponse"
                onSubmit={this.submit}
                class="mx-2 my-2"
                target="hidden_iframe"
              >
                <div class="form-group">
                  <small id="Year" class="form-text text-muted">
                    <i class="fas fa-calendar-alt"></i> Year
                  </small>
                  <input
                    type="text"
                    name="entry.1437758037"
                    id="year1"
                    class=" form-control"
                    aria-describedby="Year"
                    placeholder=" Year"
                    autoComplete="off"
                  />
                  <div>
                    <span
                      id="yearerror1"
                      className="text-danger font-weight-bold"
                    ></span>
                  </div>
                </div>
                <div class="form-group">
                  <small id="CarBatteryModel" class="form-text text-muted">
                    <i class="fas fa-car-battery    "></i> Car Brand Model Trim
                  </small>
                  <input
                    type="text"
                    name="entry.1911907904"
                    id="carbattery1"
                    class="form-control "
                    aria-describedby="CarBatteryModel"
                    placeholder=" Car Brand Model Trim"
                    autoComplete="off"
                  />
                  <div>
                    <span
                      id="carbatteryerror1"
                      className="text-danger font-weight-bold"
                    ></span>
                  </div>
                </div>
                <div class="form-group">
                  <small id="AreaName" class="form-text text-muted">
                    <i class="fa fa-map-marker" aria-hidden="true"></i> Area
                    Name, Emirate *
                  </small>
                  <input
                    type="text"
                    name="entry.1153362739"
                    id="area1"
                    class="form-control "
                    aria-describedby="AreaName"
                    placeholder=" Area Name, Emirate"
                    autoComplete="off"
                  />
                  <div>
                    <span
                      id="areaerror1"
                      className="text-danger font-weight-bold"
                    ></span>
                  </div>
                </div>
                <div class="form-group">
                  <small id="ContactNo" class="form-text text-muted pt-3">
                    <i class="fa fa-phone" aria-hidden="true"></i> Contact
                    Number (971_________){" "}
                  </small>
                  <input
                    type="text"
                    name="entry.153243795"
                    id="contactno1"
                    class="form-control "
                    aria-describedby="ContactNo"
                    placeholder="Contact Number (971_________)"
                    autoComplete="off"
                  />
                  <div>
                    <span
                      id="contactnoerror1"
                      className="text-danger font-weight-bold"
                    ></span>
                  </div>
                </div>
                <button
                  type="submit"
                  id="RefreshPage"
                  class="btn btn-danger btn-lg btn-block pb-3"
                  target="_self"
                >
                  <i class="fab fa-whatsapp"></i>
                  &nbsp;&nbsp;SEND
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container pt-5 text-center">
          <div className="row">
            <div className="col-md-4">
              <i class="fab fa-whatsapp fa-3x " aria-hidden="true"></i>
              <br />
              <p className="paragraph">
                Send Your Location &<br /> Contact No.
              </p>
            </div>
            <div className="col-md-4">
              <i class="fa fa-quote-right fa-3x " aria-hidden="true"></i>
              <br />
              <p className="paragraph"> Get Best Quote</p>
            </div>
            <div className="col-md-4">
              <i class="fas fa-car-battery fa-3x" aria-hidden="true"></i>
              <br />
              <p className="paragraph">
                Get Battery
                <br /> installed at Your
                <br /> designation location{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid div-bg py-5">
          <div className="container">
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
                      Delivered anywhere in Dubai & Sharjah , United Arab
                      Emirates
                    </li>
                  </ul>
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={MJ}
                  alt="car battery"
                  className="img-fluid warranty"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
          <h2 className="heading">
            Automobile Battery Replacement Service ! Why you need us?
          </h2>
          <hr />
        </div>
        <p className="container paragraph">
          Automobile Battery is an essential part of every vehicle be it cars,
          buses, trucks and so on. For almost all vehicles which are driven
          typically in an typical life the car battery lasts for 2 years more or
          less. There is always a need for replacement of batteries and we are
          here to fulfill that need of yours. After a long term attachment with
          your ride all of a sudden you feel somethings wrong or all of a sudden
          your love just stopped cranking it wont start anymore it just keeps
          clicking but wont just start you feel dead, saddened like a part of
          you missing, the feelings mutual, well do not worry for it battery
          might have been dead and we are here to charge back the soul into your
          ride and in turn you feel back on track. (you just need to WhatsApp
          and we will be at your service fixing the battery)
        </p>
        <div className="container">
          <hr />
          <h2 className="heading">Our Brands</h2>
          <hr />
        </div>
        <p className="container paragraph">
          We deal only with genuine brands namely SOLITE. ACDELCO, AMARON, VARTA
          and other genuine and authentic battery batteries depending on the
          demand for our battery supply and replacement services.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <Link to="/acdelco" title="car battery near me">
                <img
                  src={Prod1}
                  alt="battery replacement"
                  className="img-fluid battery"
                />
                <div className="text-center">
                  <p className="paragraph">Read {">>"}</p>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-xs-6">
              <Link to="/amaron" title="car battery near me">
                <img
                  src={Prod2}
                  alt="battery replacement"
                  className="img-fluid battery"
                />
                <div className="text-center">
                  <p className="paragraph">Read {">>"}</p>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-xs-6">
              <Link to="/varta" title="car battery service">
                <a href="/">
                  <img
                    src={Prod3}
                    alt="battery"
                    className="img-fluid battery"
                  />
                  <div className="text-center">
                    <p className="paragraph">Read {">>"}</p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-xs-6">
              <Link to="/solite" title="solite battery">
                <img src={Prod4} alt="battery" className="img-fluid battery" />
                <div className="text-center">
                  <p className="paragraph">Read {">>"}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Link to="/sell" title="sell with us">
            <button type="button" class="btn btn-primary btn-lg">
              Sell with Us {">>"}
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
