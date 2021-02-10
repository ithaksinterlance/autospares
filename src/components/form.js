import React, { Component, useRef } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default class form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("A name was submitted" + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              ></input>
              <input className="form-group" type="submit" value="Submit" />
            </label>
          </form>
        </div>
      </div>
    );
  }
}
