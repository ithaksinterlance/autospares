import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid row nav1 d-flex justify-content-center pt-2">
          Replace Your battery Now! &nbsp; &nbsp;
          <i class="fa fa-phone" aria-hidden="true"></i> Call +971551478994 or{" "}
          <br />{" "}
          <div className="container d-flex justify-content-center">
            <a href="/" className="nav1-icon" target="_blank" rel="noreferrer">
              <i class="fa fa-whatsapp " aria-hidden="true">
                WhatsApp Us
              </i>
            </a>
          </div>{" "}
        </div>

        <div className="container d-flex justify-content-end pt-3">
          <i
            class="fa fa-2x fa-whatsapp"
            style={{ color: "#25d366" }}
            aria-hidden="true"
          ></i>
          &nbsp;&nbsp;
          <i
            class="fa fa-2x fa-envelope"
            style={{ color: "#dd4b39" }}
            aria-hidden="true"
          ></i>
          &nbsp;&nbsp;
          <i
            class="fa fa-2x fa-telegram"
            style={{ color: "#0088cc" }}
            aria-hidden="true"
          ></i>
          &nbsp;&nbsp;
          <i
            class="fa fa-2x fa-instagram"
            style={{ color: "#8134af" }}
            aria-hidden="true"
          ></i>
          &nbsp;&nbsp;
        </div>
        <div className="text-center mt-0">
          <p className="paragraph">
            BATTERY REPLACEMENT SERVICES IN DUBAI AND SHARJAH
          </p>
        </div>
        <nav class="navbar navbar-expand-lg navbar-color">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i
              className="fa fa-2x fa-bars"
              style={{
                border: "black",
              }}
            ></i>
          </button>
          <div className="d-flex d-block flex-row mx-auto mx-0">
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <ul className="container navbar-nav justify-content-between">
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/audio">
                    <a className="nav-link" href="/">
                      About
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link" href="/">
                      Battery Inquiries
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link" href="/">
                      Our Brands
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link" href="/">
                      Special Offers
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link" href="/">
                      Our Services
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link" href="/">
                      Get News Letters
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>{" "}
        </nav>
      </div>
    );
  }
}
