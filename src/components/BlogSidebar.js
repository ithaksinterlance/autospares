import React, { Component } from "react";
import HAKS from "../img/Logo.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default class BlogSidebar extends Component {
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
          document.getElementById("miForm").onreset(window.location.reload())
        );
        return submitted;
      }
    }
  }
  render() {
    return (
      <div className="col-md-3 text-center pt-3">
        <div className="py-4">
        <h1 className="paragraph">Pre-order your battery now!</h1>
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
                class="py-4 px-4 form-bg"
                width="50"
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
                <input type="hidden" id="ref" name="entry.376651987" value="AJB"/>
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

        <img
          src={HAKS}
          alt="car battery replacement dubai"
          className="img-fluid rounded-circle haks"
        />
        <h1 className="heading pt-3 ">PUBLISHER</h1>
        <div className="contain">
          <a
            href="https://www.facebook.com/haksinterlance/"
            style={{ color: "#4867AA" }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-2x fa-facebook"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=971551478994"
            style={{ color: "#25d366" }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-2x fa-whatsapp"></i>
          </a>
          <a
            href="https://twitter.com/haksinterlance"
            style={{ color: "#1DA1F2" }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-2x fa-twitter"></i>
          </a>
          <a
            href="http://g.page/haksinterlance"
            rel="noopener noreferrer"
            style={{ color: "#de5246" }}
            target="_blank"
          >
            <i class="fab fa-2x fa-google"></i>
          </a>
          <a href="mailto:haksinterlance@gmail.com">
            <i
              class="fas fa-2x fa-envelope"
              style={{ color: "#dd4b39" }}
              aria-hidden="true"
            ></i>
          </a>
          <a href="http://t.me/haksinterlance" style={{ color: "#0088cc" }}>
            <i class="fab fa-2x fa-telegram-plane"></i>
          </a>
        </div>
        <h1 className="paragraph pt-3" style={{ textDecoration: "underline" }}>
          RELATED ARTICLES
        </h1>
        <hr />
        <ul class="list-group">
          <li class="list-group-item">
            <Link
              to="/How_to_maintain_your_car_battery"
              rel="noopener noreferrer"
              className="paragraph"
            >
              How to maintain your car battery
            </Link>
          </li>
          <hr/>
          <li class="list-group-item"><Link
              to="/How_to_know_if_your_car_battery_is_dying"
              rel="noopener noreferrer"
              className="paragraph"
            >
             How to know if your car battery is dying
            </Link></li><hr/>
          <li class="list-group-item"><Link
              to="/tips_to_sanitize_your_car_during_covid_19"
              rel="noopener noreferrer"
              className="paragraph"
            >
              Tip to sanitize your car during covid 19
            </Link></li><hr/>
          <li class="list-group-item"><Link
              to="/All_you_need_to_know_about_car_battery"
              rel="noopener noreferrer"
              className="paragraph"
            >
             All you need to know about car battery
            </Link></li><hr/>
          <li class="list-group-item"><Link
              to="/top_4_battery_for_your_car"
              rel="noopener noreferrer"
              className="paragraph"
            >
              Top 4 battery for your car
            </Link></li>
        </ul>
      </div>
    );
  }
}
