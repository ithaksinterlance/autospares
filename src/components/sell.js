import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import World from "../img/worldgif.gif";

export default class sell extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container sellcontainer">
          <div className="col-md-7 col-xs-12 col-sm-6">
            <img src={World} alt="battery replacement" className="img-fluid " />
          </div>
          <div className="col-md-3 col-xs-12 col-sm-6">
            <div className="container pt-4 ">
              <div className="row">
                <div className="col-md-8 col-sm-12 col-lg-4 col-xs-12">
                  <iframe
                    title="form"
                    name="hidden_iframe"
                    id="hidden_iframe"
                    style={{ display: "none" }}
                  ></iframe>
                  <form
                    id="myForm"
                    method="POST"
                    action="https://docs.google.com/forms/d/e/1FAIpQLSd6fL_M5hLUjjBLJyMFWUijW2qNrGwQ0RxMVhpmTOEEqj3Jxg/formResponse"
                    onSubmit={this.submituserInquiryForm}
                    class="mx-2 my-2"
                    target="hidden_iframe"
                  >
                    <div class="form-group">
                      <small id="Year" class="form-text text-muted">
                        <i class="fas fa-calendar-alt"></i> Name
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
                        <i class="fas fa-car-battery    "></i> Email
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
                        <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                        Mobile No
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
                        <i class="fa fa-phone" aria-hidden="true"></i> Inquiry
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
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
