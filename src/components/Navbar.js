import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex justify-content-end">
          <i class="fa fa-2x fa-whatsapp" aria-hidden="true"></i>&nbsp;&nbsp;
          <i class="fa fa-2x fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;
          <i class="fa fa-2x fa-telegram" aria-hidden="true"></i>&nbsp;&nbsp;
        </div>
        <div className="text-center mt-0">
          <p className="lead">AUTO SPARE PARTS IN U.A.E </p>
        </div>
        <nav class="navbar navbar-expand-lg navbar-color">
          <a class="navbar-brand" href="/">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="d-flex d-block flex-row mx-auto mx-0 ">
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul className="container navbar-nav w-100 justify-content-between">
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
                        Batteries
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">
                      <a className="nav-link" href="/">
                        Auto Spare Inquiries
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </div>
        </nav>
      </div>
    );
  }
}
