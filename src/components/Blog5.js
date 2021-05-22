import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CarBattery from "../img/battery.jpeg";
import MetaTags from "react-meta-tags";
import BlogSidebar from "./BlogSidebar";

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
            content="Top 4 battery for your car |"
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
                  Switch On Your Car Engine very often in winter
                </li>
                <p className="blog-paragraph-heading">
                 
                </p>
                <li className="blog-list-heading">
                  Cool the temprature of your car in summer
                </li>
                <p className="blog-paragraph-heading">
                  
                </p>
                <li className="blog-list-heading">
                  Idea from this lady in cooling her car
                </li>
                <p className="blog-paragraph-heading">
                 
                </p>
                <li className="blog-list-heading">
                  Clean Your battery from Dust
                </li>
                <p className="blog-paragraph-heading">
              
                </p>
                <li className="blog-list-heading">
                  How often should your change your battery?
                </li>
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

export default Blog5;
