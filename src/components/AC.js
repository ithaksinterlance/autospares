import React, { Component } from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";

export default class AC extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1 className="heading">LOOKING For AC car battery?</h1>
        <p className="paragrapgh"></p>


        <div className="text-center">
          <Footer/>
        </div>

      </div>
    )
  }
}
