import React, { Component } from "react";
import HAKS from "../img/Logo.jpeg";
import { Link } from "react-router-dom";

export default class BlogSidebar extends Component {
  render() {
    return (
      <div className="col-md-3 text-center pt-3">
        <img
          src={HAKS}
          alt="autobatteries"
          className="img-fluid rounded-circle haks"
        />
        <h1 className="heading pt-3 ">PUBLISHER</h1>
        <div className="contain">
          <a
            href="https://www.facebook.com/haksinterlance/"
            style={{ color: "#4867AA" }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-2x fa-facebook"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=971551478994"
            style={{ color: "#25d366" }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-2x fa-whatsapp"></i>
          </a>
          <a
            href="https://twitter.com/haksinterlance"
            style={{ color: "#1DA1F2" }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-2x fa-twitter"></i>
          </a>
          <a
            href="http://g.page/haksinterlance"
            rel="noopener noreferrer"
            style={{ color: "#de5246" }}
            target="_blank"
          >
            <i class="fab fa-2x fa-google"></i>
          </a>
          <a href="mailto:haksinterlance@gmail.com">
            <i
              class="fas fa-2x fa-envelope"
              style={{ color: "#dd4b39" }}
              aria-hidden="true"
            ></i>
          </a>
          <a href="http://t.me/haksinterlance" style={{ color: "#0088cc" }}>
            <i class="fab fa-2x fa-telegram-plane"></i>
          </a>
        </div>
        <h1 className="paragraph pt-3" style={{ textDecoration: "underline" }}>
          RELATED ARTICLES
        </h1>
        <hr />
        <ul class="list-group">
          <li class="list-group-item">
            <Link
              to="/How_to_maintain_your_car_battery"
              rel="noopener noreferrer"
              className="paragraph"
            >
              How to maintain your car battery
            </Link>
          </li>
          <hr/>
          <li class="list-group-item"><Link
              to="/How_to_know_if_your_car_battery_is_dying"
              rel="noopener noreferrer"
              className="paragraph"
            >
             How to know if your car battery is dying
            </Link></li><hr/>
          <li class="list-group-item"><Link
              to="/Tip_to_sanitize_your_car_during_covid_19"
              rel="noopener noreferrer"
              className="paragraph"
            >
              Tip to sanitize your car during covid 19
            </Link></li><hr/>
          <li class="list-group-item"><Link
              to="/All_you_need_to_know_about_car_battery"
              rel="noopener noreferrer"
              className="paragraph"
            >
             All you need to know about car battery
            </Link></li><hr/>
          <li class="list-group-item"><Link
              to="/top_4_battery_for_your_car"
              rel="noopener noreferrer"
              className="paragraph"
            >
              Top 4 battery for your car
            </Link></li>
        </ul>
      </div>
    );
  }
}
