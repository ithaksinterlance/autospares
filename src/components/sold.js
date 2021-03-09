import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import World from "../img/haks.jpg";
import CarBattery from "../img/sell.jpg";
import Swal from "sweetalert2";

export default class sold extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var whatsappno = document.getElementById("whatsappno").value;
    var country = document.getElementById("country").value;
    var company = document.getElementById("company").value;
    var inquire = document.getElementById("inquire").value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var submitted = true;

    if (name === "") {
      submitted = false;
      document.getElementById("namerror").innerHTML = "** Please fill the Name";
      //return false;
    } else if (email === "") {
      submitted = false;
      document.getElementById("emailerror").innerHTML =
        "** Please fill the EmailID";
      //return false;
    } else if (!email.match(mailformat)) {
      submitted = false;
      document.getElementById("emailerror").innerHTML =
        "** Please fill the Correct EmailID";
      //return false;
    } else if (whatsappno === "") {
      submitted = false;
      document.getElementById("whatsappnoerror").innerHTML =
        "** Please fill the Contact";
      //return false;
    } else if (isNaN(whatsappno)) {
      submitted = false;
      document.getElementById("whatsappno").innerHTML =
        "** Check Your Whatsapp no";
      //return false;
    } else if (company === "") {
      submitted = false;
      document.getElementById("companyerror").innerHTML =
        "** Please fill the Company Name";
      //return false;
    } else if (country === "") {
      submitted = false;
      document.getElementById("countryerror").innerHTML =
        "** Please fill the Area";
      //return false;
    } else if (inquire === "") {
      submitted = false;
      document.getElementById("inquirerror").innerHTML =
        "** Please fill the Inquiry";
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
        <div className="container-fluid header-text1 px-0">
          <img
            src={CarBattery}
            alt="battery replacement"
            className="img-fluid header-img"
          />

          <div
            className="header-text display-4"
            style={{ paddingLeft: "10px" }}
          >
            DEAL WITH TRUST
            <div className="d-flex p-2 pt-3">
              <a class="btn btn-primary p-2" href="/" role="button">
                Buy for Wholesale
              </a>
              <a class="btn btn-primary p-2" href="/" role="button">
                Buy for Retailsale
              </a>
            </div>
          </div>
        </div>
        <div className="container py-5 div-bg">
          <div className="col-md-6 col-xs-12 col-sm-6">
            <div className="container py-4 ">
              <div className="row">
                <div className="col-md-8 col-sm-12 col-lg-4 col-xs-12">
                  <iframe
                    title="form"
                    name="hidden_iframe"
                    id="hidden_iframe"
                    style={{ display: "none" }}
                  ></iframe>
                  <form
                    id="miForm"
                    method="POST"
                    action="https://docs.google.com/forms/d/e/1FAIpQLSfqIJGLOakrqak1od66bUHwpY7Ftn9YJVMTMTi021LUziofYw/formResponse"
                    onSubmit={this.submit}
                    class="mx-2 my-2"
                    target="hidden_iframe"
                  >
                    <div class="form-group">
                      <small id="Name" class="form-text text-muted">
                        <i class="fas fa-calendar-alt"></i>Name
                      </small>
                      <input
                        type="text"
                        name="entry.1442417937"
                        id="name"
                        class="form-control"
                        aria-describedby="Name"
                        placeholder="Name"
                        autoComplete="off"
                      />
                      <div>
                        <span
                          id="namerror"
                          className="text-danger font-weight-bold"
                        ></span>
                      </div>
                    </div>
                    <div class="form-group">
                      <small id="Email" class="form-text text-muted">
                        <i class="fas fa-car-battery"></i>Email
                      </small>
                      <input
                        type="text"
                        name="entry.578512623"
                        id="email"
                        class="form-control "
                        aria-describedby="Email"
                        placeholder="Email"
                        autoComplete="off"
                      />
                      <div>
                        <span
                          id="emailerror"
                          className="text-danger font-weight-bold"
                        ></span>
                      </div>
                    </div>
                    <div class="form-group">
                      <small id="WhatsappNo" class="form-text text-muted">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        Whatsapp No*
                      </small>
                      <input
                        type="text"
                        name="entry.1480016484"
                        id="whatsappno"
                        class="form-control "
                        aria-describedby="WhatsappNo"
                        placeholder="Whatsapp No (971_________)*"
                        autoComplete="off"
                      />
                      <div>
                        <span
                          id="whatsappnoerror"
                          className="text-danger font-weight-bold"
                        ></span>
                      </div>
                    </div>
                    <div class="form-group">
                      <small id="Country" class="form-text text-muted pt-3">
                        <i class="fa fa-phone" aria-hidden="true"></i>Country
                      </small>
                      <input
                        type="text"
                        name="entry.1141971151"
                        id="country"
                        class="form-control "
                        aria-describedby="Country"
                        placeholder="Country"
                        autoComplete="off"
                      />
                      <div>
                        <span
                          id="countryerror"
                          className="text-danger font-weight-bold"
                        ></span>
                      </div>
                    </div>
                    <div class="form-group">
                      <small id="Company" class="form-text text-muted pt-3">
                        <i class="fa fa-phone" aria-hidden="true"></i>Company
                      </small>
                      <input
                        type="text"
                        name="entry.1602135448"
                        id="company"
                        class="form-control "
                        aria-describedby="Company "
                        placeholder="Company"
                        autoComplete="off"
                      />
                      <div>
                        <span
                          id="companyerror"
                          className="text-danger font-weight-bold"
                        ></span>
                      </div>
                    </div>
                    <div class="form-group">
                      <small id="Inquire" class="form-text text-muted pt-3">
                        <i class="fa fa-phone" aria-hidden="true"></i>Inquire
                      </small>
                      <input
                        type="textarea"
                        name="entry.2068787174"
                        id="inquire"
                        class="form-control "
                        aria-describedby="Inquire"
                        placeholder="Inquire"
                        autoComplete="off"
                      />
                      <div>
                        <span
                          id="inquirerror"
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
          </div>
          <div className="col-md-6 col-xs-12 col-sm-6 my-5">
            <img src={World} alt="battery replacement" className="img-fluid" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
