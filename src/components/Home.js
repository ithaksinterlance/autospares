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
            AutoB - Car battery replacement ,delivery, installation Dubai &
            Sharjah
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
          <img
            src={Hero}
            alt="car battery replacement"
            className="img-fluid header-img"
          />

          <div
            className="header-text display-4"
            style={{ paddingLeft: "10px" }}
          >
            NO.1 CAR BATTERY REPLACEMENT SERVICE AT DUBAI AND SHARJAH<br/>

          <Link className="btn btn-danger btn-lg" to="/contact" style={{color:"white"}}>SEND YOUR CAR DETAILS</Link>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
          <div className="col-md-6 text-center">
            <img
              src={WelcomeImg}
              className="img-fluid rounded-circle welcomeImg"
              alt="car battery replacement sharjah"
              style={{ backgroundColor: "#FF4500" }}
            />
            <h1 className="container heading">
              Welcome to AutoB !
              <p className="paragraph">
                We at AutoB are dedicated to provide services such as Roadside
                assistance, car battery delivery at home / office / etc, car
                battery installation , car battery replacement anywhere at dubai
                and sharjah.
              </p>
            </h1>
          </div>
          <div className="col-md-6 text-center" style={{borderLeft:"1px solid lightgray" }}>
            <p className="paragraph" style={{textDecoration:"underline"}}>WHATSAPP INQUIRY FORM</p>
            <hr/>
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
                className="py-4 px-4"
                target="hidden_iframe"
              >
                <div className="form-group">
                  <small id="CarBatteryModel" className="form-text">
                    <i className="fas fa-car-battery"></i> Vehicle Details
                  </small>
                  <input
                    type="text"
                    name="entry.1911907904"
                    id="carbattery"
                    className="form-control "
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
                <div className="form-group">
                  <small id="AreaName" className="form-text">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                    Delivery Location
                  </small>
                  <input
                    type="text"
                    name="entry.1153362739"
                    id="area"
                    className="form-control"
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
                <div className="form-group">
                  <small id="ContactNo" className="form-text">
                    <i className="fa fa-phone" aria-hidden="true"></i> Contact
                  </small>
                  <input
                    type="text"
                    name="entry.153243795"
                    id="contactno"
                    className="form-control "
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
                  className="btn btn-danger btn-lg btn-block pb-3 form-btn"
                  target="_self"
                >
                  <i className="fab fa-whatsapp"></i>
                  &nbsp;&nbsp;SEND
                </button>
              </form>
          </div>
          </div>
         </div>
        <div className="container pt-5">
          <h1 className="heading">AutoB | Why you need us?</h1>
        </div>
        <div className="container-fluid pb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body text-center">
                  <i
                    className="fa fa-check-circle fa-5x"
                    aria-hidden="true"
                  ></i>
                  <h5 className="text-center paragraph">
                    Warranty Guaranteed
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body text-center">
                  <i
                    className="fas fa-money-bill fa-5x"
                    aria-hidden="true"
                  ></i>
                  <h5 className="text-center paragraph">Easy payment</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body text-center">
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
                <div className="card-body text-center">
                  <i className="fa fa-phone fa-5x" aria-hidden="true"></i>
                  <h5 className="text-center paragraph">Quick response</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body text-center">
                  <i className="fas fa-clock fa-5x" aria-hidden="true"></i>
                  <h5 className="text-center paragraph">24/7 Support</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-1" style={{ width: "18rem" }}>
                <div className="card-body text-center">
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

        <div className="container-fluid py-5">
          <div className="container">
            <h1 className="heading">Brands</h1>
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-xs-6 border shadow-lg">
                <Link to="/acdelco-battery" title="car battery near me">
                  <LazyLoadImage
                    alt="car battery replacement dubai"
                    effect="blur"
                    className="img-fluid battery"
                    src={Prod1}
                  />
                  <h5 className="card-title text-center">ACDELCO</h5>
                  <p style={{ color: "black", fontSize: "14px" }}>
                    The AC DElco AA batteries performed as good as the much more
                    expensive Duracell and energizer batteries and are well
                    worth buying. This applies if you use a lot of these guy's
                    for remote controls or other small electric battery powered
                    devices.
                  </p>
                  <div className="text-center">
                    <p
                      className="paragraph btn-success"
                      style={{ color: "white" }}
                    >
                      BUY NOW
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-xs-6 border shadow-lg">
                <Link to="/amaron-battery" title="car battery dubai">
                  <LazyLoadImage
                    alt="car battery replacement sharjah"
                    effect="blur"
                    className="img-fluid battery"
                    src={Prod2}
                  />
                  <h5 className="card-title text-center">AMARON</h5>
                  <p style={{ color: "black", fontSize: "14px" }}>
                    Amaron is the only battery that contains the patented Silven
                    X alloy. And that's what gives it the power to last long,
                    really long.
                  </p>
                  <div className="text-center">
                    <h1
                      className="paragraph btn-success"
                      style={{ color: "white" }}
                    >
                      BUY NOW
                    </h1>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-xs-6 border shadow-lg">
                <Link to="/solite-battery" title="battery replacement dubai">
                  <LazyLoadImage
                    alt="solite car battery price uae"
                    effect="blur"
                    className="img-fluid battery"
                    src={Prod3}
                  />
                  <h5 className="card-title text-center">SOLITE</h5>
                  <p style={{ color: "black", fontSize: "14px" }}>
                    Solite is a very common brand in the UAE due to its
                    ruggedness and ability to withstand all weather conditions
                    as they come. Solite has proven to be a reliable car battery
                    over the years, it has a very high rating and numerous
                    positive reviews from previously purchased units.
                  </p>
                  <div className="text-center">
                    <h1
                      className="paragraph btn-success"
                      style={{ color: "white" }}
                    >
                      BUY NOW
                    </h1>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-xs-6 border shadow-lg">
                <Link to="/varta-battery" title="solite battery dubai">
                  <LazyLoadImage
                    alt="car battery dubai"
                    effect="blur"
                    className="img-fluid battery"
                    src={Prod4}
                  />
                  <h5 className="card-title text-center">VARTA</h5>
                  <p style={{ color: "black", fontSize: "14px" }}>
                    VARTA Primary Batteries provide the optimal energy solution
                    for all your devices of daily use, from toys to digital
                    cameras to remote controls and many more. To suit every type
                    of energy consumption we developed the VARTA LONGLIFE
                    Primary range.
                  </p>
                  <div className="text-center">
                    <h1
                      className="paragraph btn-success"
                      style={{ color: "white" }}
                    >
                      BUY NOW
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <h1 className="heading">
                GET CAR BATTERY FOR ALMOST ALL MAKES
              </h1>
              <CarBrandImages images={this.state.CarBrandList} />

            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <h1 className="heading">FREQUENTLY ASKED QUESTIONS</h1>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                     What is CCA(cold cranking amps?)
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                  The car battery with more CCA, has high chance of starting the engine very soon than the car battery which has less CCA value. So when buying battery make sure that your battery has a good cold cranking Amp value.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What are the types of battery?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                  Car battery are of AGM types or of EFB types. Some other batteries are mostly the variation of lead acid batteries. It works by chemical reaction between lead plates, sulphuric acid and distilled water to create electrical power.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What are all the tips to sanitize your car?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                  Sanitize your car handles, Clean your upholstery, Donot use wet cloth for sanitizing, Disinfect your air conditioning system, Personal Hygiene, Wear disposable hand gloves and Mask, Get off the car only if necessary, Prepare sticky notes
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How to know if your car battery is dying
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                  Dimming of headlights, Battery connectors are corroded, Car makes a sound when turning on the engine, Your car battery is more than 3.5 years, Bad smells
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFive">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How to know if your car battery is dying
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                  Dimming of headlights, Battery connectors are corroded, Car makes a sound when turning on the engine, Your car battery is more than 3.5 years, Bad smells
                  </div>
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>
        <div className="container py-5">
        <div className="row d-flex justify-content-center">
            <h1 className="heading">TAGS</h1>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <a href="/" title="car battery replacement"><span class="badge badge-pill badge-dark">car battery replacement</span></a> <a href="/" title="car battery replacement dubai"><span class="badge badge-pill badge-dark">car battery replacement in dubai</span></a> <a href="/" title="car battery replacement sharjah"><span class="badge badge-pill badge-dark">car battery replacement in sharjah</span></a> <a href="/amaron-battery" title="amaron battery near me"><span class="badge badge-pill badge-dark">amaron battery near me</span></a> <a href="/solite-battery" title="solite battery near me"><span class="badge badge-pill badge-dark">solite battery near me</span></a> <a href="/amaron-battery" title="amaron battery near me"><span class="badge badge-pill badge-dark">amaron battery near me</span></a><a href="/varta-battery" title="varta battery near me"><span class="badge badge-pill badge-dark">varta battery near me</span></a><a href="/amaron-battery" title="amaron battery sharjah"><span class="badge badge-pill badge-dark">amaron battery sharjah</span></a> <a href="/solite-battery" title="solite battery sharjah"><span class="badge badge-pill badge-dark">solite battery sharjah</span></a> <a href="/varta-battery" title="varta battery sharjah"><span class="badge badge-pill badge-dark">varta battery sharjah</span></a> <a href="/solite-battery" title="solite battery sharjah"><span class="badge badge-pill badge-dark">solite battery sharjah</span></a> <a href="/amaron-battery" title="amaron battery dubai"><span class="badge badge-pill badge-dark">amaron battery dubai</span></a> <a href="/solite-battery" title="solite battery dubai"><span class="badge badge-pill badge-dark">solite battery dubai</span></a> <a href="/varta-battery" title="varta battery dubai"><span class="badge badge-pill badge-dark">varta battery dubai</span></a> <a href="/solite-battery" title="solite battery dubai"><span class="badge badge-pill badge-dark">solite battery dubai</span></a> <a href="/solite-battery" title="solite battery replacement in uae"><span class="badge badge-pill badge-dark">solite battery replacement in uae</span></a>

              </div></div>
        </div>

        <Footer />
      </div>
    );
  }
}
