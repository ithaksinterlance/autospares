import React, { Component } from "react";
import HAKS from "../img/Logo.jpeg";
import { Link } from "react-router-dom";
import CarBattery from "../img/battery.webp";
import Speedometer from "../img/speedometer.webp";
import Sanitize from "../img/sanitize.webp";
import Battery from "../img/carbattery.webp";
import BlackCar from "../img/blackcar.jpg"

export default class BlogSidebar extends Component {
  render() {
    return (
      <div className="col-md-4 text-center pt-3">
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
            <i class="fab fa-3x fa-facebook"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=971551478994"
            style={{ color: "#25d366" }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-3x fa-whatsapp"></i>
          </a>
          <a
            href="https://twitter.com/haksinterlance"
            style={{ color: "#1DA1F2" }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-3x fa-twitter"></i>
          </a>
          <a
            href="http://g.page/haksinterlance"
            rel="noopener noreferrer"
            style={{ color: "#de5246" }}
            target="_blank"
          >
            <i class="fab fa-3x fa-google"></i>
          </a>
          <a href="mailto:haksinterlance@gmail.com">
            <i
              class="fas fa-3x fa-envelope"
              style={{ color: "#dd4b39" }}
              aria-hidden="true"
            ></i>
          </a>
          <a href="http://t.me/haksinterlance" style={{ color: "#0088cc" }}>
            <i class="fab fa-3x fa-telegram-plane"></i>
          </a>
        </div>
        <h1 className="paragraph pt-3" style={{ textDecoration: "underline" }}>
          RELATED ARTICLES
        </h1>
        <div class="card">
          <img class="card-img-top" src={CarBattery} alt="autobatteries" />
          <div class="card-body">
            <h5 class="card-title">How to maintain your car battery</h5>
            <p class="card-text">
              Switch On Your Car Engine very often in winter, Cool the
              temprature of your car in summer, Idea from this based lady in
              cooling her car, Clean Your battery from Dust, How often should
              your change your battery?
            </p>
            <Link
              to="/How_to_maintain_your_car_battery"
              class="btn btn-primary"
              rel="noopener noreferrer" target="_blank"
            >
              Read more {'>>'}
            </Link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={Speedometer} alt="autobatteries" />
          <div class="card-body">
            <h5 class="card-title">How to know if your car battery is dying</h5>
            <p class="card-text">
              Dimming of headlights, Battery connectors are corroded, Car makes
              a sound when turning on the engine, Your car battery is more than
              3.5 years, Bad smells
            </p>
            <Link
              to="/How_to_know_if_your_car_battery_is_dying"
              class="btn btn-primary"
              rel="noopener noreferrer" target="_blank"
            >
              Read more {'>>'}
            </Link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={Sanitize} alt="autobatteries" />
          <div class="card-body">
            <h5 class="card-title">Tip to sanitize your car during covid 19</h5>
            <p class="card-text">
              Sanitize your car handles, Clean your upholstery, Donot use wet
              cloth for sanitizing, Disinfect your air conditioning system,
              Personal Hygiene, Wear disposable hand gloves and Mask, Get off
              the car only if necessary, Prepare sticky notes
            </p>
            <Link
              to="/Tip_to_sanitize_your_car_during_covid_19"
              class="btn btn-primary"
              rel="noopener noreferrer" target="_blank"
            >
              Read more {'>>'}
            </Link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={BlackCar} alt="autobatteries" />
          <div class="card-body">
            <h5 class="card-title">All you need to know about car battery</h5>
            <p class="card-text">
            Do's and Dont's inside the car during pandemic , When will your car battery die , Don't use tap water to refill your battery , Find the CCA(Cold Cranking Amps) of your battery , Brand of your car battery, Warranty, Manufacturing date , Battery types , Know about our service
            </p>
            <Link
              to="/All_you_need_to_know_about_car_battery" rel="noopener noreferrer" target="_blank"
              class="btn btn-primary"
            >
              Read more {'>>'}
            </Link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={Battery} alt="car battery replacement dubai" />
          <div class="card-body">
            <h5 class="card-title">Top 4 battery for your car</h5>
            <p class="card-text">
            Amaron , Acdelco , Solite , Varta
            </p>
            <Link to="/top_4_battery_for_your_car" class="btn btn-primary">
              Read more {'>>'}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
