import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MetaTags from "react-meta-tags";
import BlogSidebar from "./BlogSidebar";
import CarBattery from "../img/carbattery.jpeg";
import { Link } from "react-router-dom";

export default class Blog4 extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Autobatteries | All you need to know about car battery</title>
          <meta charset="utf-8" />
          <meta
            name="title"
            content="All you need to know about car battery"
          />
          <meta
            name="description"
            content="All you need to know about car battery | "
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
              All you need to know about car battery
              </h1>
              <img
                src={CarBattery}
                className="img-fluid blog-img"
                alt="car battery replacement dubai"
              />
              <hr />
              <div className="sharethis-inline-share-buttons"></div>
              <p className="blog-paragraph-heading">
               
              </p>
              <ol>
                <li className="blog-list-heading">Do's and Dont's inside the car during pandemic</li>
                <p className="blog-paragraph-heading">
                  Donot use wet cloth to sanitize your car. Rather use damp cloth to clean your car as it is easy to use. Donot open your car window until and unless it is necessary in order to reduce the possibilty od spread of virus from outside the car. Use sticky notes to show message to people outside the car. To read more about how to sanitize your car during pandemic, <Link to="/tips_to_sanitize_your_car_during_covid_19">click here.</Link>
                </p>
                <li className="blog-list-heading">When will your car battery die</li>
                <p className="blog-paragraph-heading">
                 It is very important to know when your car battery wears off because it gives your an awareness of when to change your battery before it stops you to the middle of the road. It generally takes about 3.5 years for your battery to wear off. To know more about When will your car battery die, <Link to="/how_to_know_if_your_car_battery_is_dying">click here.</Link>
                </p>
                <li className="blog-list-heading">
                  Donot use wet cloth for sanitizing
                </li>
                <p className="blog-paragraph-heading">
              
                </p>
                <li className="blog-list-heading">
                  Disinfect your air conditioning system
                </li>
                <p className="blog-paragraph-heading">
               
                </p>
                <li className="blog-list-heading">Personal Hygiene</li>
                <p className="blog-paragraph-heading">
                
                </p>
                <li className="blog-list-heading">
                  Wear disposable hand gloves and Mask
                </li>
                <p className="blog-paragraph-heading">
            
                </p>
                <li className="blog-list-heading">
                  Get off the car only if necessary
                </li>
                <p className="blog-paragraph-heading">
             
                </p>
                <li className="blog-list-heading">Prepare sticky notes</li>
                <p className="blog-paragraph-heading">
               
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
