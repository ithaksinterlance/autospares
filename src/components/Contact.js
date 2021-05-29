import React, { Component } from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container py-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-sm-12 col-lg-4 col-xs-12">
              <div className="container">
                <h2 className="heading">Send Inquiries</h2>
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
        <Footer />
      </div>
    );
  }
}
