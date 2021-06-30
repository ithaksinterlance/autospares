import React, { Component } from "react";
import Logo from "../img/logo192.png";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="my-auto">
        <div className="container-fluid text-center">
          <div className="row text-center">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="my-2">
                <img
                  src={Logo}
                  className="img-fluid rounded-circle haks"
                  alt="car battery dubai"
                />
              </div>
              <a
                href="http://g.page/haksinterlance"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  className="fab fa-google px-1"
                  style={{ color: "#de5246", fontSize: "30px" }}
                  aria-hidden="true"
                ></i>
              </a>
              <a
                href="https://www.facebook.com/haksinterlance/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  className="fab fa-facebook-square px-1"
                  style={{ color: "#4867AA", fontSize: "30px" }}
                  aria-hidden="true"
                ></i>
              </a>
              <a
                href="https://twitter.com/haksinterlance"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  className="fab fa-twitter-square px-1"
                  style={{ color: "#1DA1F2", fontSize: "30px" }}
                  aria-hidden="true"
                ></i>
              </a>
              <a
                href="https://www.linkedin.com/company/14462820/admin/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  class="fab fa-linkedin-in px-1"
                  style={{ color: "#1DA1F2", fontSize: "30px" }}
                  aria-hidden="true"
                ></i>
              </a>
              <a
                href="https://www.instagram.com/haksinterlance/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  className="fab fa-instagram px-1"
                  style={{ color: "#813db4", fontSize: "30px" }}
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h6 class="mb-3 mb-lg-4 bold-text my-2">
                <b>Quick-menus</b>
              </h6>
              <ul class="list-unstyled">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/contact">
                  <li>Contact</li>
                </Link>
                <Link to="/car-battery-replacement">
                  <li>Services</li>
                </Link>
                <Link to="/car-battery-brands">
                  <li>Brands</li>
                </Link>
                <Link to="/post">
                  <li>Blog</li>
                </Link>
              </ul>
              <div className="my-2"> &copy;2021 autobatteries.hakstime.com</div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">

              <h6 class="mb-3 mb-lg-4 bold-text my-2">
                <b>Car Battery Brands</b>
              </h6>
              <ul class="list-unstyled">
                <Link to="/amaron-battery">
                  <li className="list-item">Amaron Battery</li>
                </Link>
                <Link to="/acdelco-battery">
                  <li>Acdelco Battery</li>
                </Link>
                <Link to="/solite-battery">
                  <li>Solite Battery</li>
                </Link>
                <Link to="/varta-battery">
                  <li>Varta battery</li>
                </Link>
              </ul>
              <div className="my-2">
                Powered by <u>HAKS-iT</u>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
