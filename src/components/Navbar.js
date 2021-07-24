import React, { Component } from "react";
import { Link } from "react-router-dom";
import WhatsApp from "../img/wa.png";
import Phone from "../img/phoneicon.png";
import favicon from "../img/logo192.png";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=971551478994" id="menu">
            <img src={WhatsApp} alt="car battery price in dubai" id="menu" />
          </a>
        </div>
        <div>
          <a href="tel:971551478994" id="menu1">
            <img src={Phone} alt="car battery price dubai" className="rounded-circle" id="menu1" />
          </a>
        </div>

        <div class="col-xs-12 flex-container fixed-bottom pb-0 pt-2">
          <div class="row" >
            <div class="col-xs-2 text-center pt-3 mx-1" >
              <Link to="/" className="bottomNav">
                <i class="fa fa-2x fa-home" aria-hidden="true"></i>
                <br />
                <p className="fontSize text-center">HOME</p>
              </Link>
            </div>
            <div class="col-xs-2 text-center pt-3 mx-1" >
              <Link to="/car-battery-replacement" className="bottomNav">
                <i class="fas fa-2x fa-screwdriver"></i>
                <br />
                <p className="fontSize text-center">SERVICE</p>
              </Link>
            </div>
            <div class="col-xs-2 text-center pt-3 mx-1">
              <Link to="/post" className="bottomNav">
                <i class="fa fa-book fa-2x" aria-hidden="true"></i>
                <br />
                <p className="fontSize text-center">BLOG</p>
              </Link>
            </div>
            <div class="col-xs-2 text-center pt-3 mx-1">
              <Link to="/car-battery-brands" className="bottomNav">
                <i class="fas fa-car-battery fa-2x"></i>
                <br />
                <p className="fontSize text-center">BRANDS</p>
              </Link>
            </div>

            <div class="col-xs-2 text-center pt-3 mx-1">
              <a href="https://api.whatsapp.com/send?phone=971551478994" className="bottomNav">
                <i class="fa fa-share fa-2x" aria-hidden="true"></i>
                <br />
                <p className="fontSize text-center">SHARE</p>
              </a>
            </div>
            <div class="col-xs-2 text-center pt-3 mx-1">
              <a href="tel:971551478994" className="bottomNav">
                <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                <br />
                <p className="fontSize text-center">CALL </p>
              </a>
            </div>
          </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-color" id="navbar">
        <a href="/"><div><img src={favicon} alt="car battery" id="logo" className="d-flex justify-content-start" style={{height: "50px", width:"50px"}}/></div></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          </button>
          <div className="d-flex d-block flex-row mx-auto mx-0 ">

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="container navbar-nav justify-content-between">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/car-battery-brands" className="nav-link">
                    Brands
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/car-battery-replacement" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/become-a-partner" className="nav-link">
                    د.إ Become a partner
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/post" className="nav-link">
                    Blog
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
