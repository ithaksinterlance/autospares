import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Prod1 from "../img/product1.webp";
import Prod2 from "../img/product2.webp";
import Prod3 from "../img/product3.webp";
import Prod4 from "../img/product4.webp";
import MJ from "../img/autobatteries.hakstime.com.webp";
import Green from "../img/greencar.webp";
import Road from "../img/road.webp";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import MetaTags from "react-meta-tags";
import JsonLd from "./structureJSON"

export default class Home extends Component {
  submit() {
    var carbattery1 = document.getElementById("carbattery1").value;
    var area1 = document.getElementById("area1").value;
    var contactno1 = document.getElementById("contactno1").value;
    var submitted = true;

   if (carbattery1 === "") {
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
    var carbattery = document.getElementById("carbattery").value;
    var area = document.getElementById("area").value;
    var contactno = document.getElementById("contactno").value;
    var submitted = true;

    if (carbattery === "") {
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
          document.getElementById("myForm").onreset(window.location.reload())
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
            Autobatteries | Car Battery replacement | Dubai {'&'} Sharjah
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
            content="car battery, car battery replacement dubai,car battery replacement sharjah,sharjah, dubai, arab, united arab emirates, uae, mjbattery, dubai car battery replacement, sharjah battery replacement, amaron battery, solite battery, acdelco battery, varta battery,  porsche battery,audi battery,chrevlot battery, battery for kia battery, battery for ranault battery,acura battery,chrysler battery,dodge battery,daewoo battery,ford battery,fiat battery, lexus battery, maserati battery"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="author" content="autobatteries.hakstime.com" />
          {
          this.props.jsonLd &&
            <JsonLd data={this.props.jsonLd} />
        }
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
                  <small id="CarBatteryModel" class="form-text">
                    <i class="fas fa-car-battery"></i> Vehicle Details
                  </small>
                  <input
                    type="text"
                    name="entry.1911907904"
                    id="carbattery"
                    class="form-control "
                    aria-describedby="CarBatteryModel"
                    placeholder=" Car Model Year"
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
                  <small id="AreaName" class="form-text">
                    <i class="fa fa-map-marker" aria-hidden="true"></i> Delivery Location
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
                  <small id="ContactNo" class="form-text">
                    <i class="fa fa-phone" aria-hidden="true"></i> Contact
                  </small>
                  <input
                    type="text"
                    name="entry.153243795"
                    id="contactno"
                    class="form-control "
                    aria-describedby="ContactNo"
                    placeholder="WhatsApp Number"
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
                  class="btn btn-danger btn-lg btn-block pb-3 form-btn"
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
                  <small id="CarBatteryModel" class="form-text">
                    <i class="fas fa-car-battery    "></i> Vehicle Details
                  </small>
                  <input
                    type="text"
                    name="entry.1911907904"
                    id="carbattery1"
                    class="form-control "
                    aria-describedby="CarBatteryModel"
                    placeholder=" Car Model Year"
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
                  <small id="AreaName" class="form-text">
                    <i class="fa fa-map-marker" aria-hidden="true"></i> Delivery Location
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
                  <small id="ContactNo" class="form-text">
                    <i class="fa fa-phone" aria-hidden="true"></i> Contact
                  </small>
                  <input
                    type="text"
                    name="entry.153243795"
                    id="contactno1"
                    class="form-control "
                    aria-describedby="ContactNo"
                    placeholder="WhatsApp Number"
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
                  class="btn btn-danger btn-lg btn-block form-btn pb-3"
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
              <h1 className="paragraph">
                Send Your Location &<br /> Contact No.
              </h1>
            </div>
            <div className="col-md-4">
              <i class="fa fa-quote-right fa-3x " aria-hidden="true"></i>
              <br />
              <h1 className="paragraph"> Get Best Quote</h1>
            </div>
            <div className="col-md-4">
              <i class="fas fa-car-battery fa-3x" aria-hidden="true"></i>
              <br />
              <h1 className="paragraph">
                Get Battery
                <br /> installed at Your
                <br /> designation location{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="container-fluid div-bg py-5">
          <div className="container">
            <hr />
            <h1 className="heading">
              Automobile Battery Replacement Service ! Why you need us?
            </h1>
            <hr />
          </div>
          <h1 className="container paragraph">
            Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta. We come to you.
          </h1>
        </div>
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <hr />
                <h1 className="heading">Onsite Battery Replacement</h1>
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
        <div className="container-fluid div-bg py-5">
          <div className="container">
            <hr />
            <h1 className="heading">Our Brands</h1>
            <hr />
          </div>
          <h1 className="container paragraph">
            We deal only with genuine brands namely SOLITE. ACDELCO, AMARON,
            VARTA and other genuine and authentic battery batteries depending on
            the demand for our battery supply and replacement services.
          </h1>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-xs-6">
                <Link to="/acdelco-battery" title="car battery near me">
                  <img
                    src={Prod1}
                    alt="car battery replacement in dubai"
                    className="img-fluid battery"
                  />
                  <div className="text-center">
                    <p className="paragraph">Read {">>"}</p>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-xs-6">
                <Link to="/amaron-battery" title="car battery near me">
                  <img
                    src={Prod2}
                    alt="battery replacement"
                    className="img-fluid battery"
                  />
                  <div className="text-center">
                    <h1 className="paragraph">Read {">>"}</h1>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-xs-6">
                <Link to="/varta-battery" title="car battery service">
                  <a href="/">
                    <img
                      src={Prod3}
                      alt="battery replacement sharjah"
                      className="img-fluid battery"
                    />
                    <div className="text-center">
                      <h1 className="paragraph">Read {">>"}</h1>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-md-3 col-xs-6">
                <Link to="/solite-battery" title="solite battery">
                  <img
                    src={Prod4}
                    alt="battery"
                    className="img-fluid battery"
                  />
                  <div className="text-center">
                    <h1 className="paragraph">Read {">>"}</h1>
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
        </div>
        <Footer />
      </div>
    );
  }
}
