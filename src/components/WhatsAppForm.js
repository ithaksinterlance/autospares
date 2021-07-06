import React, { Component } from 'react';
import Swal from "sweetalert2";

export default class WhatsAppForm extends Component {
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
      <div>
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
    )
  }
}
