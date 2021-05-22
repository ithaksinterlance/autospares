import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MetaTags from "react-meta-tags";
import BlogSidebar from "./BlogSidebar";
import Sanitize from "../img/sanitize.jpg";

export default class Blog3 extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Autobatteries | Tips to sanitize your car during covid-19</title>
          <meta charset="utf-8" />
          <meta
            name="title"
            content="Tips to sanitize your car during covid-19"
          />
          <meta
            name="description"
            content="Tips to sanitize your car during covid-19 | Sanitize your car handles, Clean your upholstery, Donot use wet cloth for sanitizing, Disinfect your air conditioning system, Personal Hygiene, Wear disposable hand gloves and Mask, Get off the car only if necessary, Prepare sticky notes"
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
                Tips to sanitize your car during covid-19
              </h1>
              <img
                src={Sanitize}
                className="img-fluid blog-img"
                alt="autobatteries"
              />
              <hr />
              <div className="sharethis-inline-share-buttons"></div>
              <p className="blog-paragraph-heading">
                As we know that the covid-19 pandemic era has started leaving
                many millions to loose their life. Many business effected, the
                exports and imports, thr small scale business till the large
                scale business witnessed a massive loss in their business.
                Eventually as some claim it as a world war. Well! without going
                out of topic lets get into discussion of how to sanitize your
                car during covid-19.
              </p>
              <ol>
                <li className="blog-list-heading">Sanitize your car handles</li>
                <p className="blog-paragraph-heading">
                  Before sanitizing anything, the car handles come into
                  first-in-first-out queue. This car handles are used very often
                  and there must be a high possibility that it may be infected.
                  Use your isopropyl alcohol sanitizer to sanitize your car
                  engine. Donot use bleach or baking soda or just water to
                  sanitize as they are not recommended by reasearch.
                </p>
                <li className="blog-list-heading">Clean your upholstery</li>
                <p className="blog-paragraph-heading">
                  The next step that comes after cleaning your car handles is to
                  clean your car upholstery. You are more vulnerable to have an
                  infection if it is not cleaned as it is with you throughout
                  the journey.
                </p>
                <li className="blog-list-heading">
                  Donot use wet cloth for sanitizing
                </li>
                <p className="blog-paragraph-heading">
                  Wet clothes are not easy to dry after every disinfectant. So
                  use damp clothes to be on safer side. Use disinfectant like
                  lysol, Lifebuoy hand sanitizer and dettol are more recommended
                  to use for disinfecting your car.
                </p>
                <li className="blog-list-heading">
                  Disinfect your air conditioning system
                </li>
                <p className="blog-paragraph-heading">
                  Air conditioning system is going to be used throughout the
                  journey. Do not cough or sneeze over it as it is going to give
                  out the air throughout your journey and your entire interior
                  of the car may get infected too.
                </p>
                <li className="blog-list-heading">Personal Hygiene</li>
                <p className="blog-paragraph-heading">
                  Before any Hygiene, personal hygiene comes first. Have your
                  sanitizer with you wherever you are. Sanitize your hands even
                  if you count cash. Wear mash and maintain social distancing
                  atleast 6 feet apart as recommended by UN.
                </p>
                <li className="blog-list-heading">
                  Wear disposable hand gloves and Mask
                </li>
                <p className="blog-paragraph-heading">
                  Wear disposable hand gloves and Mask everyday. Use only one
                  mask and one gloves atmost for 2 journeys. Dispose it
                  properly.
                </p>
                <li className="blog-list-heading">
                  Get off the car only if necessary
                </li>
                <p className="blog-paragraph-heading">
                  In this pandemic situation, it is extremely important that you
                  are careful on each and every steps your take forward. Do not
                  make unecessary contact with anyone unti and unless it is very
                  important.
                </p>
                <li className="blog-list-heading">Prepare sticky notes</li>
                <p className="blog-paragraph-heading">
                  Throughout your journey there must come a situaton when you
                  need to communicate a little to people outside the car during
                  your journey. Use sticky notes to communicate with them rather
                  than opening your car window each and every time to
                  communicate for a little.
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
