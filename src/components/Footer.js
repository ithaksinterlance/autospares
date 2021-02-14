import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="my-auto ">
        <div className="container-fluid text-center">
          <div className="row text-center">
            <div className="col-xs-12 col-sm-6 col-md-4">
              &copy;2021 HAKS International Lancing
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
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
              Powered by <u>HAKS-iT</u>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
