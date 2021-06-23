import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import MetaTags from "react-meta-tags";
import BlogSidebar from "./BlogList";
import WhatsAppForm from "./WhatsAppForm";
import {BlogData} from "../blog_data.js";

export default class Blog7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BlogData: BlogData,
    };
  }
  render() {
    const data = BlogData[0];
      return (
        <div>
          <MetaTags>
            <title>{data.title}</title>
            <meta charset="utf-8" />
            <meta name="title" content={data.title}/>
            <meta
              name="description"
              content="Car battery dead? Don't worry! We are here to help you. We give 24/7 support. Our services are done in dubai and sharjah , delivered and installed. You can contact us through WhatsApp us or Call us now"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta name="author" content="autobatteries.hakstime.com" />
          </MetaTags>
          <Navbar />
          <div class="container-fluid">
            <div className="row">
            <WhatsAppForm />
            <div className="col-md-4">
              <BlogSidebar/>
            </div>
            <div class="col-md-4 col-xs-12">
              <div>
                <h1 class="display-4">{data.title}</h1>
              </div>
              <div>
                <p class="lead">{data.date}</p>
              </div>
              <div class="padding">{data.post}</div>
              <hr />
            </div>
            </div>
            <BlogSidebar />
          </div>
          <div className="text-center">
            <Footer />
          </div>
        </div>
      );
  }
}
