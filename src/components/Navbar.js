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
              <a href="tel:971551478994" style={{ color: "black" }}>
                <i class="fa fa-phone" aria-hidden="true"></i>Call +971551478994
                or
              </a>
            </p>
            <p className="nav1">
              <a
                href="https://api.whatsapp.com/send?phone=971551478994"
                className="nav1-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-whatsapp" aria-hidden="true"></i>WhatsApp
              </a>
            </p>
            <div style={{ fontSize: "20px" }}>
              <a href="https://api.whatsapp.com/send?phone=971551478994">
                <i
                  class="fab fa-whatsapp  fa-2x"
                  style={{ color: "#25d366" }}
                ></i>
              </a>
              &nbsp;&nbsp;
              <a href="mailto:haksinterlance@gmail.com">
                <i
                  class="fas fa-2x fa-envelope"
                  style={{ color: "#dd4b39" }}
                  aria-hidden="true"
                ></i>
              </a>
              &nbsp;&nbsp;
              <i
                class="fab fa-2x fa-telegram"
                style={{ color: "#0088cc" }}
                aria-hidden="true"
              ></i>
              &nbsp;&nbsp;
              <a href="https://www.instagram.com/haksinterlance/">
                <i
                  class="fab fa-2x fa-instagram"
                  style={{ color: "#8134af" }}
                  aria-hidden="true"
                ></i>
              </a>
              &nbsp;&nbsp;
            </div>
          </div>
        </div>
        <div class="col-xs-12 flex-container navbar-fixed-bottom pb-0 pt-2">
          <div class="row pb-0" id="bottomNav">
            <div class="col-xs-2 text-center pt-3">
              <Link to="/">
                <i class="fa fa-2x fa-home" aria-hidden="true"></i>
                <br />
                <p className="fontSize text-center">HOME</p>
              </Link>
            </div>
            <div class="col-xs-2 text-center pt-3">
              <Link to="/services">
                <i class="fas fa-2x fa-screwdriver"></i>
                <br />
                <p className="fontSize text-center">SERVICE</p>
              </Link>
            </div>
            <div class="col-xs-2 text-center pt-3">
              <Link to="/sell">
                <i class="fas fa-plus-circle fa-2x"></i>
                <br />
                <p className="fontSize text-center">SELL</p>
              </Link>
            </div>
            <div class="col-xs-2 text-center pt-3">
              <Link to="/brands">
                <i class="fas fa-car-battery fa-2x"></i>
                <br />
                <p className="fontSize text-center">BRANDS</p>
              </Link>
            </div>

            <div class="col-xs-2 text-center pt-3">
              <a href="https://api.whatsapp.com/send?text=autobatteries.hakstime.com">
                <i class="fa fa-share fa-2x" aria-hidden="true"></i>
                <br />
                <p className="fontSize text-center">SHARE</p>
              </a>
            </div>
            <div class="col-xs-2 text-center pt-3">
              <a href="tel:971551478994">
                <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                <br />
                <p className="fontSize text-center">CALL </p>
              </a>
            </div>
          </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-color" id="navbar">
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
                  <Link to="/brands" className="nav-link">
                    Our Brands
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/services">
                    <a className="nav-link" href="/">
                      Our Services
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/sell">
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
