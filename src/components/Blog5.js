import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import CarBattery from "../img/carbattery.webp";
import MetaTags from "react-meta-tags";
import BlogSidebar from "./BlogSidebar.js";

class Blog5 extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Autobatteries | Top 4 battery for your car</title>
          <meta charset="utf-8" />
          <meta name="title" content="Top 4 battery for your car" />
          <meta
            name="description"
            content="Top 4 battery for your car | Amaron , Acdelco , Solite , Varta"
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
              Top 4 battery for your car
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
                 Amaron battery is made in india. It is made of Silven X-Alloy. So it has high capacity to withstand heat. A battery has six cells of 12 volt battery in it thus giving the best durability. Amaron batteries are made in QS 9000 IS 14000 & TS 16949 certified plants using world-class technology. The raw materials we use are of best-in-class purity and we make absolutely no compromise on the quality. Every item is stringently tested for conformance to specifications. Our batteries are manufactured in a totally automated assembly line, to ensure consistent products of the highest quality. 
                </p>
                <div className="flex-container d-flex justify-content-center">
            <a href="/amaron-battery" title="Amaron"><p className="nav1 blink_me">Get Your Amaron battery Now {'>>'}</p></a></div>
                <li className="blog-list-heading">
                  Acdelco
                </li>
                <p className="blog-paragraph-heading">
                  Acdelco battery types are of AGM types. Some of it benefits are Sealed Maintainence-free design, ACDelco full frame technology stamped positive plates, patented high-density active material on plates, has built-in 'state of charge hydrometer' etc. Acdelco batteries are Laboratory-tested, field-proven, and backed by GM with outstanding limited-warranty coverage, ACDelco Gold (Professional) and Silver (Advantage) Batteries set the standard for performance.                  
                </p><div className="flex-container d-flex justify-content-center">
            <a href="/acdelco-battery" title="Acdelco"><p className="nav1 blink_me">Get Your Acdelco battery Now {'>>'}</p></a></div>
                <li className="blog-list-heading">
                  Varta
                </li>
                <p className="blog-paragraph-heading">
                 VARTA batteries are engineered in germany. Vrta batteries are AGM based. EFB batteries types are also available for varta. But AGM suits the best for car batteries. It is designed to deliver the right level of power and longevity for every kind of car. VARTA batteries provide longer life, less corrosion and lower cost of ownership, qualities you’ll find in all our products from our advanced start-stop automotive range to our professional powerboat products.
                </p>
                <div className="flex-container d-flex justify-content-center">
            <a href="/varta-battery" title="Varta"><p className="nav1 blink_me">Get Your Varta battery Now {'>>'}</p></a></div>
                
                <li className="blog-list-heading">
                  Solite
                </li>
                <p className="blog-paragraph-heading">
                Solite is a highly reliable automotive battery that satisfies the car lovers all over the world under any circumstance. It is the major OEM supplier to Hyundai and KIA motors all over the world, and the presence of Solite batteries in all factory assembled Hyundai and KIA vehicles is a solid assurity of its superior quality.
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
    );
  }
}

export default Blog5;
