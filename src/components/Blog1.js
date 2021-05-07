//How to maintain Your car battery
import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

class Blog1 extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <hr />
        <h2 className="heading">How to maintain Your car battery</h2>
        <hr />
        <div className="container">
          <table>
            <tbody id="data"></tbody>
          </table>
        </div>
        <div className="container">
          <table>
            <tbody id="dat"></tbody>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog1;
