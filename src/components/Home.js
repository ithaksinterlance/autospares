import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Prod1 from "../img/battery1.png";
import Prod2 from "../img/battery2.png";
import Prod3 from "../img/battery3.png";
import Prod4 from "../img/battery4.png";
import MJ from "../img/carbattery.gif";
import Hero from "../img/A.png";
import WelcomeImg from "../img/logo512.png";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import MetaTags from "react-meta-tags";
import { CarBrandList } from "./CarBrandList";
import CarBrandImages from "./CarBrandImages";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/blur.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CarBrandList: CarBrandList,
    };
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
            AutoB - Car battery  replacement ,delivery, installation Dubai & Sharjah
          </title>
          <meta charset="utf-8" />
          <meta
            name="title"
            content="AutoB - Car battery  replacement ,delivery, installation Dubai & Sharjah"
          />
          <meta
            name="keywords"
            content="battery dubai, auto battery, autobatteries, auto batteries, car auto, car battery, car battery replacement, car battery replacement sharjah, car battery replacement dubai, car battery change dubai, car battery dubai,car batteries dubai, car battery uae,car battery sharjah,battery replacement dubai,battery replacement sharjah,battery sharjah, car battery dubai price,dubai car battery, sharjah car battery, uae car battery, car battery price dubai,car battery price in dubai,car battery price in Sharjah, car battery price uae, battery change dubai, solite battery price uae, amaron battery price uae,amaron battery dubai, dubai car battery replacement, amaron batteries dubai,amaron battery dubai, varta battery uae"
          />
          <meta
            name="description"
            content="Shop your car batteries online... Order your battery now online. Car Battery Replacement | Replace your car battery anytime at United Arab Emirates, Dubai and Sharjah. We offer car battery change for batteries such as Solite, Amaron, Acdelco, Varta. We offer the best car battery services. Vehicle batteries delivery & car battery installation service at best price. 24/7 support.  Auto battery price in uae, dubai and sharjah starting from 200AED"
          />
          <meta
            name="keywords"
            content="car battery replacement sharjah, car battery replacement dubai , car battery replacement uae ,car battery change, car battery dubai, car battery uae,car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="author" content="autobatteries.hakstime.com" />
        </MetaTags>
        <div className="container-fluid header-text1 px-0">
          <img src={Hero} alt="car battery" className="img-fluid header-img" />

          <div
            className="header-text display-4"
            style={{ paddingLeft: "10px" }}
          >
            NO.1 CAR BATTERY REPLACEMENT SERVICE AT DUBAI AND SHARJAH
          </div>
        </div>
        <div class="container-fluid form-bg">
          <div class="row ">
            <div class="col-md-3 col-xs-12 col-sm-10 top-right">
              <iframe
                title="car battery replacement dubai and sharjah"
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: "none" }}
              ></iframe>
              <form
                id="myForm"
                method="POST"
                action="https://docs.google.com/forms/d/e/1FAIpQLSd6fL_M5hLUjjBLJyMFWUijW2qNrGwQ0RxMVhpmTOEEqj3Jxg/formResponse"
                onSubmit={this.submituserInquiryForm}
                class="py-4 px-4"
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
                    <i class="fa fa-map-marker" aria-hidden="true"></i> Delivery
                    Location
                  </small>
                  <input
                    type="text"
                    name="entry.1153362739"
                    id="area"
                    class="form-control"
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
                    placeholder="(Country code)(No.)"
                    autoComplete="off"
                  />
                  <div>
                    <span
                      id="contactnoerror"
                      className="text-danger font-weight-bold"
                    ></span>
                  </div>
                </div>
                <input
                  type="hidden"
                  id="ref"
                  name="entry.376651987"
                  value="AJB"
                />
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
        <hr />
        <div className="container py-5">
          <div className="d-flex">
            <img
              src={WelcomeImg}
              className="img-fluid rounded-circle welcomeImg"
              alt="car battery replacement sharjah"
              style={{ backgroundColor: "#FF4500" }}
            />
            <h1 className="container welcome-message">
              Welcome to AUTOBATTERIES.HAKstime! We are the company dedicated to
              serve the people in need of car battery at dubai and sharjah , at
              whatsoever the situation it may be, be it rain,be it middle of the
              road, be it car battery delivery at home. We provide service such
              as car battery replacement sharjah and car battery replacement
              dubai , car battery delivery , car battery installation , car
              battery warranty are given compusorily. Car battery change done at
              dubai and sharjah. We come to you. You can enter your CAR BATTERY
              DETAILS , AREA YOU ARE IN , AND YOUR MOBILE NUMBER WITH COUNTRY
              CODE. We get notified at a moment and We come to you.
            </h1>
          </div>
        </div>
        <div className="container pt-5">
          <hr />
          <h1 className="heading">AutoB | Why you need us?</h1>
          <hr />
        </div>
        <div className="container-fluid pb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body div-bg text-center shadow-lg">
                  <i
                    className="fa fa-check-circle fa-5x"
                    aria-hidden="true"
                  ></i>
                  <h5 className="text-center paragraph">Warranty Guaranteed</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body div-bg text-center shadow-lg">
                  <i className="fas fa-money-bill fa-5x" aria-hidden="true"></i>
                  <h5 className="text-center paragraph">Easy payment</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body div-bg text-center shadow-lg">
                  <i className="fa fa-wrench fa-5x" aria-hidden="true"></i>
                  <h5 className="text-center paragraph">
                    Professional Service
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body div-bg text-center shadow-lg">
                  <i className="fa fa-phone fa-5x" aria-hidden="true"></i>
                  <h5 className="text-center paragraph">Quick response</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body div-bg text-center shadow-lg">
                  <i className="fas fa-clock fa-5x" aria-hidden="true"></i>
                  <h5 className="text-center paragraph">24/7 Support</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body div-bg text-center shadow-lg">
                  <i
                    className="fas fa-car-battery fa-5x paragraph1-icon"
                    aria-hidden="true"
                  ></i>
                  <h5 className="text-center paragraph">OEM Batteries</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 div-bg ">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <hr />
                <h1 className="heading">
                  Car Battery Replacement Dubai and Sharjah
                </h1>
                <hr />
                <p className="lead paragraph">
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
                <LazyLoadImage
                  alt="car battery dubai"
                  effect="blur"
                  className="img-fluid warranty"
                  src={MJ}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="container">
            <hr />
            <h1 className="heading">Our Brands</h1>
            <hr />
          </div>
          <h1 className="container paragraph">
            Car Battery Replacement | Replace your car battery anytime at Dubai
            and Sharjah. We offer the best battery replacement service. Delivery{" "}
            {"&"} installation service at best price. We offer battery
            replacement for battery such as Solite, Amaron, Acdelco, Varta. We
            come to you. We deal only with genuine brands namely SOLITE.
            ACDELCO, AMARON, VARTA and other genuine and authentic battery
            batteries depending on the demand for our battery supply and
            replacement services.
          </h1>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-xs-6 border shadow-lg">
                <Link to="/acdelco-battery" title="car battery near me">
                  <h5 className="card-title text-center">ACDELCO</h5>
                  <hr />
                  <LazyLoadImage
                    alt="car battery replacement dubai"
                    effect="blur"
                    className="img-fluid battery"
                    src={Prod1}
                  />
                  <div className="text-center">
                    <p className="paragraph">BUY NOW</p>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-xs-6 border shadow-lg">
                <h5 className="card-title text-center">AMARON</h5>
                <hr />
                <Link to="/amaron-battery" title="car battery dubai">
                  <LazyLoadImage
                    alt="car battery replacement sharjah"
                    effect="blur"
                    className="img-fluid battery"
                    src={Prod2}
                  />
                  <div className="text-center">
                    <h1 className="paragraph">BUY NOW</h1>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-xs-6 border shadow-lg">
                <h5 className="card-title text-center">SOLITE</h5>
                <hr />
                <Link to="/solite-battery" title="battery replacement dubai">
                  <LazyLoadImage
                    alt="solite car battery price uae"
                    effect="blur"
                    className="img-fluid battery"
                    src={Prod3}
                  />
                  <div className="text-center">
                    <h1 className="paragraph">BUY NOW</h1>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-xs-6 border shadow-lg">
                <h5 className="card-title text-center">VARTA</h5>
                <hr />
                <Link to="/varta-battery" title="solite battery dubai">
                  <LazyLoadImage
                    alt="car battery dubai"
                    effect="blur"
                    className="img-fluid battery"
                    src={Prod4}
                  />
                  <div className="text-center">
                    <h1 className="paragraph">BUY NOW</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="heading">CAR BATTERY REPLACEMENT UAE TAGS</h1>
              <h1 className="paragraph">
                car battery replacement dubai,car battery replacement sharjah,
                car battery sharjah, bmw battery replacement dubai , car battery
                change, battery replacement sharjah , car battery replacement ,
                car battery shop sharjah, car battery price dubai, solite
                battery price in uae , car battery replacement near me, amaron
                battery dubai, car battery change dubai, battery change dubai ,
                car battery price , battery replacement dubai , amaron car
                battery , amaron battery, Car Battery change Dubai, Car battery
                service near me, Car battery recharging shop near me, Car
                battery charging, Car battery mechanic near me, Car battery
                service near me, BMW car battery replacement, Mercedes Car
                battery replacement, Kia battery replacement, Kia Battery
                change, Kia Battery charging, BMW car battery change, BMW car
                battery change, Mercedes car battery change, Mercedes car
                battery change, Audi car battery replacement Service, Audi car
                battery change, Audi car battery charging, Honda car battery
                replacement, Honda car battery change, Honda car battery
                charging service, Lexus car battery replacement, Lexus car
                battery recharge, Lexus car battery change, Nissan car battery
                replacement, Nissan car battery change, Nissan car battery
                recharge, ford car battery replacement service, Nissan car
                battery change, Nissan car battery recharging service,
                Mitsubishi car battery replacement, Mitsubishi car battery
                service, Mitsubishi car battery change, AMARON car battery
                service, AMARON car battery replacement, AMARON car battery
                change, AMARON car battery shop, Acdelco car battery
                replacement, Acdelco car battery service, Acdelco car battery
                change, Acdelco car battery charging, Varta car battery
                replacement, Varta car battery service, Varta car battery
                change, Varta car battery charging, solite car battery service,
                solite car battery replacement, solite car battery change,
                solite car battery recharge, car battery service Sharjah,Car
                battery change Sharjah, dial a battery, 800 battery dubai,
                onsite car battery, Camry battery replacement dubai, Corolla
                Battery replacement dubai, Elantra Battery replacement dubai,
                Chevrolet battery replacement dubai, Accord battery replacement
                dubai, altima battery replacement dubai, sunny battery
                replacement dubai, land cruiser battery replacement dubai, yaris
                battery replacement dubai, sentra battery replacement dubai,
                prado battery replacement dubai,alfa romeo battery replacement
                dubai, honda battery replacement dubai, bentley battery
                replacement dubai,Bugatti battery replacement dubai, cadillac
                battery replacement dubai,Chrysler battery replacement dubai,
                citron battery replacement dubai ,Daihatsu battery replacement
                dubai, dodge battery replacement dubai, ferrari battery
                replacement dubai, fiat battery replacement dubai, ford battery
                replacement dubai, gmc battery replacement dubai, great wall
                battery replacement dubai, hummer battery replacement dubai,
                hyundai battery replacement dubai, isuzu battery replacement
                dubai, infiniti battery replacement dubai, jaguar battery
                replacement dubai, jeep battery replacement dubai, kia battery
                replacement dubai, lamborghini battery replacement dubai, onsite
                battery Sharjah, replace battery car, Camry battery replacement
                sharjah, Corolla Battery replacement sharjah, Elantra Battery
                replacement sharjah, Chevrolet battery replacement sharjah,
                Accord battery replacement sharjah, altima battery replacement
                sharjah, sunny battery replacement sharjah, land cruiser battery
                replacement sharjah, yaris battery replacement sharjah, sentra
                battery replacement sharjah, prado battery replacement
                sharjah,alfa romeo battery replacement sharjah, honda battery
                replacement sharjah, bentley battery replacement sharjah,Bugatti
                battery replacement sharjah, cadillac battery replacement
                sharjah,Chrysler battery replacement sharjah, citron battery
                replacement sharjah ,Daihatsu battery replacement sharjah, dodge
                battery replacement sharjah, ferrari battery replacement
                sharjah, fiat battery replacement sharjah, ford battery
                replacement sharjah, gmc battery replacement sharjah, great wall
                battery replacement sharjah, hummer battery replacement sharjah,
                hyundai battery replacement sharjah, isuzu battery replacement
                sharjah, infiniti battery replacement sharjah, jaguar battery
                replacement sharjah, jeep battery replacement sharjah, kia
                battery replacement sharjah, lamborghini battery replacement
                sharjah
              </h1>
            </div>
            <div className="col-md-6">
              <CarBrandImages images={this.state.CarBrandList} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
