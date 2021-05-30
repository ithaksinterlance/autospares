//How to maintain Your car battery
import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import CarBattery from "../img/battery.webp";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import BlogSidebar from "./BlogSidebar.js";

class Blog1 extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Autobatteries | How to maintain Your car battery</title>
          <meta charset="utf-8" />
          <meta name="title" content="How to maintain Your car battery" />
          <meta
            name="description"
            content="How to maintain Your car battery |Switch On Your Car Engine very often in winter, Cool the temprature of your car in summer, Idea from this based lady in cooling her car, Clean Your battery from Dust, How often should your change your battery?"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="author" content="autobatteries.hakstime.com" />
        </MetaTags>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <h1 className="blog-heading text-center">
                How to maintain Your car battery
              </h1>

              <img
                src={CarBattery}
                className="img-fluid blog-img"
                alt="autobatteries.hakstime.com"
              />
              <hr />
              <div className="sharethis-inline-share-buttons"></div>
              <ol>
                <li className="blog-list-heading">
                  Switch On Your Car Engine very often in winter
                </li>
                <p className="blog-paragraph-heading">
                  In the cold winter, it is easy for the car engine to become
                  cold quickly which may cause trouble sometimes to start an
                  engine. So the car engine must be heated up often in winter by
                  starting the car battery on regular intervals. This will
                  ensure your car is starting its engine quickly when on a
                  sudden journey.
                </p>
                <li className="blog-list-heading">
                  Cool the temprature of your car in summer
                </li>
                <p className="blog-paragraph-heading">
                  In the hot summer, when its worst 47 &deg;F the car gets
                  heated up very quickly without even driving it properly. So
                  carefully pour some water over the battery on regular
                  intervals.
                </p>
                <li className="blog-list-heading">
                  Idea from this lady in cooling her car
                </li>
                <p className="blog-paragraph-heading">
                  A delhi based lady coated her car exterior with cow dung and
                  mud mixture to beat heat. She said the interviewer, "Outside
                  the car, the temperature was 42&deg;F while inside the car it
                  was just 37&deg;F."
                </p>
                <li className="blog-list-heading">
                  Clean Your battery from Dust
                </li>
                <p className="blog-paragraph-heading">
                  The car battery needs to be cleaned against dust on regular
                  intervals. It is because the dust may enter into the battery
                  cells and may cause it to rust and cause corrosion. So it is
                  recommended to clean your battery using a mixture of baking
                  soda and water.
                </p>
                <li className="blog-list-heading">
                  How often should your change your battery?
                </li>
                <p className="blog-paragraph-heading">
                  To be on safer side before it gets too late to put you in
                  middle of the road, it is recommended to change your battery
                  every 4 years. To order battery in dubai and sharjah,{" "}
                  <a
                    href="tel:971551478994"
                    title="Call us for car battery replacement"
                  >
                    Call us
                  </a>
                  . We are available in{" "}
                  <a
                    href="https://api.whatsapp.com/send?phone=971551478994"
                    title="WhatsApp us for car battery replacement"
                  >
                    <i class="fab fa-whatsapp" aria-hidden="true"></i>
                    WhatsApp
                  </a>{" "}
                  or you can send your <Link to="/contact">Inquiry</Link> to us.
                  We will deliver the battery at your place and install it on
                  your car.
                </p>
              </ol>
            </div>
            <BlogSidebar />
          </div>
        </div>

        <div className="text-center">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Blog1;
