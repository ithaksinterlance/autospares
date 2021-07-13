import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Prod1 from "../img/battery1.png";
import Prod2 from "../img/battery2.png";
import Prod3 from "../img/battery3.png";
import Prod4 from "../img/battery4.png";
import MJ from "../img/carbattery.webp";
import MJ2 from "../img/batteryimg.jpg";
import Green from "../img/greencar.webp";
import Road from "../img/road.webp";
import WelcomeImg from "../img/logo512.png"
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import MetaTags from "react-meta-tags";
import JsonLd from "./structureJSON";
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
            AutoB-Car battery Replacement Dubai | Car battery Replacement Sharjah
          </title>
          <meta charset="utf-8" />
          <meta
            name="title"
            content="AutoB - Car Battery replacement | Dubai & Sharjah"
          />
          <meta
            name="description"
            content="We are listening you... Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer car battery change for batteries such as Solite, Amaron, Acdelco, Varta. We offer the best car battery services. Car battery delivery & car battery installation service at best price. 24/7 support.  Car battery price in uae, dubai and sharjah starting from 200AED"
          />
          <meta
            name="keywords"
            content="car battery replacement sharjah, car battery replacement dubai , car battery replacement uae ,car battery change, car battery dubai, car battery uae,car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="author" content="autobatteries.hakstime.com" />
          {this.props.jsonLd && <JsonLd data={this.props.jsonLd} />}
        </MetaTags>
        <div className="container-fluid header-text1 px-0" >
          <img
            src={Road}
            alt="car battery uae"
            className="img-fluid header-img"
          />

            <img
              src={Green}
              alt="car battery dubai"
              className="img-fluid green"
            />
          <div
            className="header-text display-4"
            style={{ paddingLeft: "10px" }}
          >
            CAR BATTERY REPLACEMENT SERVICE AT DUBAI AND SHARJAH
          </div>
        </div>
        <div class="container-fluid form-bg">
          <div class="row ">
            <div class="col-md-3 col-xs-12 col-sm-10 top-right d-flex justify-content-center">
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
        <hr/>
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-md-6 container"><h1 className="container paragraph" style={{fontStyle:"italic"}}>
            Welcome to AUTOBATTERIES.HAKstime! We are the company dedicated to serve the people in need of car battery at dubai and sharjah , at whatsoever the situation it may be, be it rain,be it middle of the road, be it car battery delivery at home. We provide service such as car battery replacement sharjah and car battery replacement dubai , car battery delivery , car battery installation , car battery warranty are given compusorily. Car battery change done at dubai and sharjah. We come to you. You can enter your CAR BATTERY DETAILS , AREA YOU ARE IN , AND YOUR MOBILE NUMBER WITH COUNTRY CODE. We get notified at a moment and We come to you.
          </h1></div>
          <div className="col-md-6">
            <img src={WelcomeImg} className="img-fluid" alt="car battery replacement sharjah"/>

          </div>
          </div>

        </div>
        <hr/>

        <div className="container pt-3 text-center">
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
                <br /> designation location
              </h1>
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
            We deal only with genuine brands namely SOLITE. ACDELCO, AMARON,
            VARTA and other genuine and authentic battery batteries depending on
            the demand for our battery supply and replacement services.
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

        <div className="container-fluid py-5 div-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <LazyLoadImage
                  alt="car battery replacement sharjah"
                  effect="blur"
                  className="img-fluid warranty"
                  src={MJ2}
                />
              </div>
              <div className="col-md-6">
                <hr />
                <h1 className="heading">
                  Autobatteries.hakstime.com | Why you need us?
                </h1>
                <hr />
                <h1 className="paragraph">
                  Car Battery Replacement | Replace your car battery anytime at
                  Dubai and Sharjah. We offer the best battery replacement
                  service. Delivery {"&"} installation service at best price. We
                  offer battery replacement for battery such as Solite, Amaron,
                  Acdelco, Varta. We come to you.
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="col-md-6">
            <hr />
            <h1 className="heading">Car Brands Tags</h1>
            <hr />
            <h1 className="paragraph">
              We provide battery replacement services at sharjah and dubai at
              best rate for various car brands. <br />
              <br />
              AC Battery | Acura Battery| Alfa Romeo| Ariel Battery | Aston Martin | Audi Battery |
              Bentley Battery | BMW Battery | Bugatti Battery | Cardillac
              Battery | Chrevlot Battery | Chrylser Battery | Citroën Battery |
              Daihatsu Battery | Ferrari Battery | Dodge Battery | Fiat Battery
              |Ford Battery | GMC Battery | Great Wall Battery | Honda Battery |
              Hummer Battery | Hyundai Battery | Infiniti Battery | Isuzu
              Battery | Jaguar Battery | Jeep Battery | Kia Battery |
              Lamborghini Battery | Land Rover Battery | Lexus Battery | Lincoln
              Battery | Mahindra Battery | Maruti Suzuki Battery | Maserati
              Battery | Maybach Battery | Mazda Battery | Mclaren Battery |
              Mercedes Battery | MG Battery | Mini Battery | Mitsubishi Battery
              | Morgan Motor Battery | Mustang Battery | Nissan Battery | Opel
              Battery | Peugeot Battery | Porsche Battery | Proton Battery |
              Renault Battery | Reva Battery | Rimac Battery | Rolls Royce
              Battery | Seat Battery | Shelby Battery | Skoda Battery | Smart
              Battery | Spyker Battery | Ssangyong Battery | SSC Battery |
              Subaru Battery | Suzuki Battery | Tata Battery | Tesla Battery |
              Toyota Battery | Volkswagen Battery | Volvo Battery | Car battery replacement dubai | car battery replacement sharjah | car battery dubai | car battery sharjah | amaron batteries dubai | solite battery price dubai | dubai car battery | sharjah car battery | car battery uae | car battery change | car battery dubai | amaron battery dubai | battery replacement dubai | battery dubai | battery sharjah |  battery uae | car battery change dubai | car battery dubai price | dubai car battery | uae car battery |battery uae | battery sharjah | car battery price uae | battery change dubai | solite battery price uae | amaron battery price uae | agm battery dubai | dubai car battery replacement | uae car battery replacement
            </h1>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="row">
              <CarBrandImages images={this.state.CarBrandList} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
