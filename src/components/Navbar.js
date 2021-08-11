import React, { Component } from "react";
import { Link } from "react-router-dom";
import favicon from "../img/logo192.png";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="tel:971551478994" id="menu">
            <i class="fab fa-3x fa-whatsapp side-icon" id="menu"></i><br/>
          </a>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=971551478994" id="menu1">
            <i class="fa fa-3x fa-phone side-icon" aria-hidden="true" id="menu1"></i>
          </a>
        </div>

        <div class="col-xs-12 flex-container fixed-bottom pb-0 pt-2">
          <div class="row" >
            <div class="col-xs-2 text-center pt-3 mx-1" >
              <Link to="/" className="bottomNav">
                <i class="fa fa-2x fa-home" aria-hidden="true"></i>
                <br />
                <p className="fontSize text-center"> Home</p>
              </Link>
            </div>
            <div class="col-xs-2 text-center pt-3 mx-1" >
              <Link to="/car-battery-replacement" className="bottomNav">
                <i class="fas fa-2x fa-screwdriver"></i>
                <br />
                <p className="fontSize text-center">Services</p>
              </Link>
            </div>
            <div class="col-xs-2 text-center pt-3 mx-1">
              <Link to="/post" className="bottomNav">
                <i class="fa fa-book fa-2x" aria-hidden="true"></i>
                <br />
                <p className="fontSize text-center">Blog</p>
              </Link>
            </div>
            <div class="col-xs-2 text-center pt-3 mx-1">
              <Link to="/car-battery-brands" className="bottomNav">
                <i class="fas fa-car-battery fa-2x"></i>
                <br />
                <p className="fontSize text-center">Brands</p>
              </Link>
            </div>

            <div class="col-xs-2 text-center pt-3 mx-1">
              <a href="https://api.whatsapp.com/send?phone=971551478994" className="bottomNav">
                <i class="fa fa-share fa-2x" aria-hidden="true"></i>
                <br />
                <p className="fontSize text-center">Share</p>
              </a>
            </div>
            <div class="col-xs-2 text-center pt-3 mx-1">
              <a href="tel:971551478994" className="bottomNav">
                <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                <br />
                <p className="fontSize text-center">Call </p>
              </a>
            </div>
          </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-color" id="navbar">
        <a href="/"><div><img src={favicon} alt="best car battery services" id="logo" className="d-flex justify-content-start" style={{height: "50px", width:"50px"}}/></div></a>
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
