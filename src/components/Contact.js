import React, {Component} from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import Swal from "sweetalert2";
import MetaTags from "react-meta-tags";

export default class Contact extends Component {
  submituserInquiryForm() {
    var carbattery = document.getElementById("carbattery").value;
    var area = document.getElementById("area").value;
    var contactno = document.getElementById("contactno").value;
    var submitted = true;

    if (carbattery === "") {
      submitted = false;
      document.getElementById("carbatteryerror").innerHTML = "** Please fill the Battery Model";
      // return false;
    } else if (area === "") {
      submitted = false;
      document.getElementById("areaerror").innerHTML = "** Please fill the Area";
      // return false;
    } else if (contactno === "") {
      submitted = false;
      document.getElementById("contactnoerror").innerHTML = "** Please fill the Contact";
      // return false;
    } else if (isNaN(contactno)) {
      submitted = false;
      document.getElementById("contactnoerror").innerHTML = "** Check Your contact no";
      // return false;
    } else {
      if (submitted) {
        Swal.fire("Form submitted. We will contact you shortly ;)").then(() => document.getElementById("myForm").onreset(window.location.reload()));
        return submitted;
      }
    }
  }
  render() {
    return (
      <div>
        <MetaTags>
          <meta charSet="utf-8" />
          <title>AutoB</title>
          <meta
            name="title"
            content="Car Battery Dubai & Sharjah | AutoB"
          />
          <meta
            name="description"
            content="Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. 24/7 support. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta."
          />
          <meta
            name="keywords"
            content="car battery replacement sharjah, car battery replacement dubai, car battery replacement uae ,car battery change, car battery dubai, car battery uae, car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement"
          />
        </MetaTags>
        <Navbar/>
        <div className="container pt-5 text-center">
          <div className="row justify-content-center">
            <h1 className="heading">Enter your CAR BATTERY DETAILS , AREA YOU ARE IN , AND YOUR MOBILE NUMBER WITH COUNTRY CODE. We get notified at a moment and We come to you.</h1>
          </div>
        </div>

        <div class="container-fluid py-5 form-bg">
          <div class="row justify-content-center">
            <div className="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d462423.69677338307!2d55.0367571!3d25.1125178!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1625891911862!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} title="car battery dubai" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-10  ">
            <h1 className="paragraph">Order your battery now!</h1>
            <hr/>
              <iframe title="car battery replacement uae" name="hidden_iframe" id="hidden_iframe"
                style={
                  {display: "none"}
              }></iframe>
              <form id="myForm" method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLSd6fL_M5hLUjjBLJyMFWUijW2qNrGwQ0RxMVhpmTOEEqj3Jxg/formResponse"
                onSubmit={
                  this.submituserInquiryForm
                }
                class="py-4 px-4"
                target="hidden_iframe">

                <div class="form-group">
                  <small id="CarBatteryModel" class="form-text">
                    <i class="fas fa-car-battery"></i>
                    Vehicle Details
                  </small>
                  <input type="text" name="entry.1911907904" id="carbattery" class="form-control " aria-describedby="CarBatteryModel" placeholder=" Car Model Year" autoComplete="off"/>
                  <div>
                    <span id="carbatteryerror" className="text-danger font-weight-bold"></span>
                  </div>
                </div>
                <div class="form-group">
                  <small id="AreaName" class="form-text">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    Delivery Location
                  </small>
                  <input type="text" name="entry.1153362739" id="area" class="form-control" aria-describedby="AreaName" placeholder=" Area Name, Emirate" autoComplete="off"/>
                  <div>
                    <span id="areaerror" className="text-danger font-weight-bold"></span>
                  </div>
                </div>
                <div class="form-group">
                  <small id="ContactNo" class="form-text">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    Contact
                  </small>
                  <input type="text" name="entry.153243795" id="contactno" class="form-control " aria-describedby="ContactNo" placeholder="(Country code)(No.)" autoComplete="off"/>
                  <div>
                    <span id="contactnoerror" className="text-danger font-weight-bold"></span>
                  </div>
                </div>
                <input type="hidden" id="ref" name="entry.376651987" value="AJB"/>
                <button type="submit" class="btn btn-danger btn-lg btn-block pb-3 form-btn" target="_self">
                  <i class="fab fa-whatsapp"></i>
                  &nbsp;&nbsp;SEND
                </button>
              </form>
            </div>
          </div>

        </div>

        <div className="text-center">
          <Footer/>
        </div>

      </div>
    );
  }
}
