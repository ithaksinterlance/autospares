import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import World from "../img/haks.jpg";
import CarBattery from "../img/sell.jpg";
import GoogleForm from "google-form-send";
var form = new GoogleForm(
  "https://docs.google.com/forms/d/e/1FAIpQLSfqIJGLOakrqak1od66bUHwpY7Ftn9YJVMTMTi021LUziofYw"
);

export default class sell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        name: "",
        emailid: "",
        country: "",
        mobileno: "",
        company: "",
        inquiry: "",
      },
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.submituserInquiryForm = this.submituserInquiryForm.bind(this);
  }
  inputNameRef = React.createRef();
  inputEmailRef = React.createRef();
  inputCountryRef = React.createRef();
  inputMobilenoRef = React.createRef();
  inputCompanyRef = React.createRef();
  inputInquiryRef = React.createRef();

  handleInputNameFocus(e) {
    this.inputNameRef.current.focus();
  }
  handleInputEmailFocus(e) {
    this.inputEmailRef.current.focus();
  }
  handleInputCountryFocus(e) {
    this.inputCountryRef.current.focus();
  }
  handleInputMobilenoFocus(e) {
    this.inputMobilenoRef.current.focus();
  }
  handleInputCompanyFocus(e) {
    this.inputCompanyRef.current.focus();
  }
  handleInputInquiryFocus(e) {
    this.inputInquiryRef.current.focus();
  }
  handleButtonClick = (event) => {};

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });

    console.log("final data is :" + e.target.value);
  }
  submituserInquiryForm(e) {
    console.log("State :" + e.target.value);
    e.preventDefault();
    try {
      var formData = {
        name: this.state.fields.name,
        emailid: this.state.fields.emailid,
        country: this.state.fields.country,
        mobileno: this.state.fields.mobileno,
        company: this.state.fields.company,
        inquiry: this.state.fields.inquiry,
      };
      form.addField("entry.1442417937", formData.name);
      form.addField("entry.578512623", formData.emailid);
      form.addField("entry.1141971151", formData.country);
      form.addField("entry.1480016484", formData.mobileno);
      form.addField("entry.1602135448", formData.company);
      form.addField("entry.2068787174", formData.inquiry);

      form.send();
    } catch {
      this.validateForm();
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your name.";
      this.handleInputNameFocus();
    }
    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]*$/)) {
        formIsValid = false;
        errors["name"] = "*Please enter alphabet characters only.";
        this.handleInputNameFocus();
      }
    }
    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
      this.handleInputEmailFocus();
    }
    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
        this.handleInputEmailFocus();
      }
    }
    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "*Please enter your country.";
      this.handleInputCountryFocus();
    }
    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
      this.handleInputMobilenoFocus();
    }
    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
        this.handleInputMobilenoFocus();
      }
    }
    if (!fields["company"]) {
      formIsValid = false;
      errors["company"] = "*Please enter your company.";
      this.handleInputCompanyFocus();
    }

    if (!fields["inquiry"]) {
      formIsValid = false;
      errors["inquiry"] = "*Please enter your inquiry.";
      this.handleInputInquiryFocus();
    }
    this.setState({
      errors: errors,
    });
    return formIsValid;
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

          <div className="header-txt display-4" style={{ paddingLeft: "10px" }}>
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
        <div className="container pt-5">
          <div className="col-md-6 col-xs-12 col-sm-6">
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
                    method="post"
                    name="userInquiryForm"
                    onSubmit={this.submituserInquiryForm}
                    encType="application/x-www-form-urlencoded"
                  >
                    <label
                      htmlFor="defaultFormRegisterNameEx"
                      className="grey-text"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="defaultFormRegisterNameEx"
                      ref={this.inputNameRef}
                      value={this.state.fields.name}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <div className="errorMsg" style={{ color: "red" }}>
                      {this.state.errors.username}
                    </div>
                    <label
                      htmlFor="defaultFormRegisterEmailEx"
                      className="grey-text"
                    >
                      Email ID
                    </label>
                    <input
                      type="text"
                      name="emailid"
                      id="defaultFormRegisterEmailEx"
                      ref={this.inputEmailRef}
                      value={this.state.fields.emailid}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <div className="errorMsg" style={{ color: "red" }}>
                      {this.state.errors.emailid}
                    </div>
                    <label
                      htmlFor="defaultFormRegisterCountryEx"
                      className="grey-text"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="defaultFormRegisterCountryEx"
                      ref={this.inputCountryRef}
                      value={this.state.fields.country}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <div className="errorMsg" style={{ color: "red" }}>
                      {this.state.errors.country}
                    </div>
                    <label
                      htmlFor="defaultFormRegisterMobileNoEx"
                      className="grey-text"
                    >
                      Mobile No
                    </label>
                    <input
                      type="text"
                      name="mobileno"
                      id="defaultFormRegisterMobileNoEx"
                      ref={this.inputMobilenoRef}
                      value={this.state.fields.mobileno}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <div className="errorMsg" style={{ color: "red" }}>
                      {this.state.errors.mobileno}
                    </div>
                    <label
                      htmlFor="defaultFormRegisterCompanyEx"
                      className="grey-text"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="defaultFormRegisterCompanyEx"
                      ref={this.inputCompanyRef}
                      value={this.state.fields.company}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <div className="errorMsg" style={{ color: "red" }}>
                      {this.state.errors.company}
                    </div>
                    <label
                      htmlFor="defaultFormRegisterInquiryEx"
                      className="grey-text"
                    >
                      Inquiry
                    </label>
                    <textarea
                      type="text"
                      name="inquiry"
                      row={5}
                      col={30}
                      id="defaultFormRegisterInquiryEx"
                      ref={this.inputInquiryRef}
                      value={this.state.fields.inquiry}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <div className="errorMsg" style={{ color: "red" }}>
                      {this.state.errors.inquiry}
                    </div>
                    <div className="text-center mt-3">
                      <button
                        type="submit"
                        class="btn btn-danger btn-lg btn-block pb-3"
                        target="_self"
                      >
                        <i class="fab fa-whatsapp"></i>
                        &nbsp;&nbsp;SEND
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 col-sm-6">
            <img src={World} alt="battery replacement" className="img-fluid " />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
