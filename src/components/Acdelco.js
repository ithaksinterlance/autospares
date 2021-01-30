import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default class Acdelco extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h2>Acdelco</h2>
        <a href="/">Order 1 for your car {">>"}</a>
        <Footer />
      </div>
    );
  }
}
