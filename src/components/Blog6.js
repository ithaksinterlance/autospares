import React, { Component } from 'react';
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import CarBattery from "../img/carbattery.webp";
import MetaTags from "react-meta-tags";
import BlogSidebar from "./BlogSidebar.js";

export default class Blog6 extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Autobatteries.hakstime</title>
          <meta charset="utf-8" />
          <meta name="title" content="Car Tinting rules UAE| Autobatteries.hakstime" />
          <meta
            name="description"
            content="UAE new traffic rules allows citizens to have 50% car tinting!"
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
              UAE new traffic rules allows citizens to have 50% car tinting!
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
                  Amaron
                </li>
                <p className="blog-paragraph-heading">
                 Car tinting rule changed in UAE. Formerly only 30% of tinting was allowed. Suprisingly, the new traffic rule has boosted tinting to 50%.
                </p>
                <div className="flex-container d-flex justify-content-center">
            <a href="/amaron-battery" title="Amaron"><p className="nav1 blink_me">Get Your Amaron battery Now {'>>'}</p></a></div>
                <li className="blog-list-heading">
                  Acdelco
                </li>
                <p className="blog-paragraph-heading">
                  The new tinting rule has laid of the burden for those who have already been fined Dh1500 for tinting more than 30% earlier.
                </p><div className="flex-container d-flex justify-content-center">
            <a href="/acdelco-battery" title="Acdelco"><p className="nav1 blink_me">Get Your Acdelco battery Now {'>>'}</p></a></div>
                <li className="blog-list-heading">
                  Varta
                </li>
                <p className="blog-paragraph-heading">

                </p>
                <div className="flex-container d-flex justify-content-center">
            <a href="/varta-battery" title="Varta"><p className="nav1 blink_me">Get Your Varta battery Now {'>>'}</p></a></div>

                <li className="blog-list-heading">
                  Solite
                </li>
                <p className="blog-paragraph-heading">

                </p>
                <div className="flex-container d-flex justify-content-center">
            <a href="/solite-battery" title="solite"><p className="nav1 blink_me">Get Your Solite battery Now {'>>'}</p></a></div>
              </ol>
            </div>
            <BlogSidebar />
          </div>
        </div>

        <div className="text-center">
          <Footer />
        </div>
      </div>
    )
  }
}
