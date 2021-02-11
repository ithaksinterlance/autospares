import React, { Component } from "react";
import { Link } from "react-router-dom";
import WA from "../img/wabattery.png";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="/" id="menu">
            <img src={WA} alt="whatsapp" id="menu" />
          </a>
        </div>

        <div className="container-fluid nav1 pt-2">
          <div className="flex-container"></div>{" "}
        </div>
        <div className="container-fluid nav1 pt-2">
          <div className="flex-container d-flex justify-content-around">
            <p className="nav1 blink_me">Replace Your battery Now!</p>

            <p className="nav1 mr-0">
              <i class="fa fa-phone" aria-hidden="true"></i>Call +971551478994
              or
            </p>
            <p className="nav1">
              <a
                href="/"
                className="nav1-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-whatsapp" aria-hidden="true"></i>WhatsApp
              </a>
            </p>
            <div style={{ fontSize: "20px" }}>
              <i
                class="fab fa-whatsapp  fa-2x"
                style={{ color: "#25d366" }}
              ></i>
              &nbsp;&nbsp;
              <i
                class="fas fa-2x fa-envelope"
                style={{ color: "#dd4b39" }}
                aria-hidden="true"
              ></i>
              &nbsp;&nbsp;
              <i
                class="fab fa-2x fa-telegram"
                style={{ color: "#0088cc" }}
                aria-hidden="true"
              ></i>
              &nbsp;&nbsp;
              <i
                class="fab fa-2x fa-instagram"
                style={{ color: "#8134af" }}
                aria-hidden="true"
              ></i>
              &nbsp;&nbsp;
            </div>
          </div>
        </div>
        <div class="col-xs-12 navbar-inverse navbar-fixed-bottom">
          <div class="row" id="bottomNav">
            <div class="col-xs-2 text-center">
              <a href="/">
                <i class="fa fa-2x fa-home" aria-hidden="true"></i>
                <br />
                <p className="fontSize text-center">Home</p>
              </a>
            </div>
            <div class="col-xs-2 text-center">
              <a href="/">
                <i class="fas fa-2x fa-screwdriver"></i>
                <br />
                <p className="fontSize text-center">Service</p>
              </a>
            </div>
            <div class="col-xs-2 text-center">
              <a href="/">
                <i class="fas fa-car-battery fa-2x"></i>
                <br />
                <p className="fontSize text-center">Brands</p>
              </a>
            </div>
            <div class="col-xs-2 text-center">
              <a href="/">
                <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
                <br />
                <p className="fontSize text-center">Sell</p>
              </a>
            </div>
            <div class="col-xs-2 text-center">
              <a href="/">
                <i class="fa fa-share fa-2x" aria-hidden="true"></i>
                <br />
                <p className="fontSize text-center">Share</p>
              </a>
            </div>
          </div>
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
                      د.إ Sell with Our leads
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
