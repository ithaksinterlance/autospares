import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import MetaTags from "react-meta-tags";
import BlogSidebar from "./BlogSidebar.js";
import BlackCar from "../img/blackcar.jpg";
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
            content="All you need to know about car battery | Do's and Dont's inside the car during pandemic , When will your car battery die , Don't use tap water to refill your battery , Find the CCA(Cold Cranking Amps) of your battery , Brand of your car battery, Warranty, Manufacturing date , Battery types , Know about our service"
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
                src={BlackCar}
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
                  Don't use tap water to refill your battery
                </li>
                <p className="blog-paragraph-heading">
                Tap water is not processed. It may contain some minerals or ions or other impurities which may damage your battery. Thus resulting in reduce of lifespan of your battery. So use demenaralized water for your battery. Because it is processed well and it is deactivated of all the mineral it contains. You can also use deionised water. No need to panic if you see that you dont find demineralized water but only find deionized water. Deionized water is also safer to refill the battery.
              
                </p>
                <li className="blog-list-heading">
                  Find the CCA(Cold Cranking Amps) of your battery
                </li>
                <p className="blog-paragraph-heading">
               The car battery with more CCA, has high chance of starting the engine very soon than the car battery which has less CCA value. So when buying battery make sure that your battery has a good cold cranking Amp value. 
                </p>
                <li className="blog-list-heading">Brand of your car battery, Warranty, Manufacturing date</li>
                <p className="blog-paragraph-heading">
                It is necessary to know the brand of your car battery because certain car fits to certain types of car battery. And also it is important to know the warranty because generally the car battery has life span upto 3.5 years. So if your car battery is dying in very short period of time, it must be your car battery service provider has put a car battery with fault. In such case claim your warranty. It is necessary to know the car battery because if old battery are installed in your car, there might be the chance that it has a corroded terminal.
                </p>
                <li className="blog-list-heading">
                  Battery types
                </li>
                <p className="blog-paragraph-heading">
                  Car battery are of AGM types or of EFB types. Some other batteries are mostly the variation of lead acid batteries. It works by chemical reaction between lead plates, sulphuric acid and distilled water to create electrical power.            
                </p>
                <li className="blog-list-heading">
                  Know about our service
                </li>
                <p className="blog-paragraph-heading">
                  It is not recommended to change your car battery all by yourself taking in account the battery that is being fixed, the vulnerable damage that may be caused due to wrong placement at a moment. <a href="tel:971551478994">Call us</a> or <a
                    href="https://api.whatsapp.com/send?phone=971551478994"
                    title="WhatsApp us for car battery replacement in dubai and sharjah"
                  >
                    <i class="fab fa-whatsapp" aria-hidden="true"></i>
                    WhatsApp
                  </a> , we are available at anytime at DUBAI and SHARJAH.  
             
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
