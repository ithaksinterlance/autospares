import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default class Amaron extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h2>Amazon</h2>
        <a href="/">Order 1 for your car {">>"}</a>
        <Footer />
      </div>
    );
  }
}
