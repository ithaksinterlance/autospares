import React, { Component } from "react";
import Logo from "../img/logo192.png";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="my-auto">
        <div className="container-fluid text-center">
          <div className="row text-center">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="my-2">
                <img
                  src={Logo}
                  className="img-fluid rounded-circle autob"
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
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h6 class="mb-3 mb-lg-4 bold-text my-2">
                <b>Quick-menus</b>
              </h6>
              <ul class="list-unstyled">
                <Link to="/" className="text-white">
                  <li>Home</li>
                </Link>
                <Link to="/contact" className="text-white">
                  <li>Contact</li>
                </Link>
                <Link to="/car-battery-replacement" className="text-white">
                  <li>Services</li>
                </Link>
                <Link to="/car-battery-brands" className="text-white">
                  <li>Brands</li>
                </Link>
                <Link to="/post" className="text-white">
                  <li>Blog</li>
                </Link>
              </ul>

            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
            <h6 class="mb-3 mb-lg-4 bold-text my-2">
                <b>Dubai & Sharjah</b>
              </h6>
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d462423.69677338307!2d55.0367571!3d25.1125178!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1625891911862!5m2!1sen!2sin" width="350" height="150" style={{border:"0"}} title="car battery dubai" allowfullscreen="" loading="lazy"></iframe>

            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h6 class="mb-3 mb-lg-4 bold-text my-2">
                <b>Car Battery Brands</b>
              </h6>
              <ul class="list-unstyled">
                <Link to="/amaron-battery" className="text-white">
                  <li className="list-item">Amaron Battery</li>
                </Link>
                <Link to="/acdelco-battery" className="text-white">
                  <li>Acdelco Battery</li>
                </Link>
                <Link to="/solite-battery" className="text-white">
                  <li>Solite Battery</li>
                </Link>
                <Link to="/varta-battery" className="text-white">
                  <li>Varta battery</li>
                </Link>
              </ul>
              <div className="my-2">
                Powered by <u>HAKS-iT</u>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="col-md-12 text-center py-2">
        <div className="my-2"> &copy;2021 <Link to="/" className="text-white">AutoB</Link> </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
