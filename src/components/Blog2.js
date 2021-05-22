import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MetaTags from "react-meta-tags";
import BlogSidebar from "./BlogSidebar";
import Speedometer from "../img/speedometer.jpeg";

export default class Blog2 extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Autobatteries | How to know if your car battery is dying</title>
          <meta charset="utf-8" />
          <meta
            name="title"
            content="Warning Signs that your Car Battery is dying"
          />
          <meta
            name="description"
            content="How to know if your car battery is dying | Dimming of headlights, Battery connectors are corroded, Car makes a sound when turning on the engine, Your car battery is more than 3.5 years, Bad smells"
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
                How to know if your car battery is dying
              </h1>
              <img
                src={Speedometer}
                className="img-fluid blog-img"
                alt="car battery replacement dubai"
              />
              <hr />
              <div className="sharethis-inline-share-buttons"></div>
              <ol>
                <li className="blog-list-heading">Dimming of headlights</li>
                <p className="blog-paragraph-heading">
                  When your car battery is about to loose all it charge, it
                  shows a dimming of light as a warning. Change the car battery
                  at this stage, because if it is further delayed it results in
                  bad smell which may cause still more pollution to the
                  environment.
                </p>
                <li className="blog-list-heading">
                  Battery connectors are corroded
                </li>
                <p className="blog-paragraph-heading">
                  The battery terminals are made of lead metal. Though the lead
                  is the highly corrosion resistant metal, it is highly toxic if
                  it starts to corrode after long time. It is toxic to human. So
                  when battery metals corrode, replace the battery as soon. It
                  probably takes more than or equal to 3.5 years for a car
                  battery to corrode.
                </p>

                <li className="blog-list-heading">
                  Car makes a sound when turning on the engine
                </li>
                <p className="blog-paragraph-heading">
                  Another sign that your car battery is dying is that it makes
                  an unusual beep sound when turning on the car engine. Thus
                  indicating that you must change the battery. This is the
                  beginning warning that your battery is dying.
                </p>
                <li className="blog-list-heading">
                  Your car battery is more than 3.5 years
                </li>
                <p className="blog-paragraph-heading">
                  Mark the date of buying your car battery. Be alarmed if it is
                  more than three and a half year since you changed your car
                  battery. We are available on{" "}
                  <a
                    href="https://api.whatsapp.com/send?phone=971551478994"
                    title="WhatsApp us for car battery replacement in dubai and sharjah"
                  >
                    <i class="fab fa-whatsapp" aria-hidden="true"></i>
                    WhatsApp
                  </a>{" "}
                </p>
                <li className="blog-list-heading">Bad smells</li>
                <p className="blog-paragraph-heading">
                  This is final warning sign that your car battery is already
                  dead. Keep track of the above warning signs before it comes to
                  this warning sign. Because bad smell pollutes the air and
                  causes suffocation for asthmatic patients.
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
