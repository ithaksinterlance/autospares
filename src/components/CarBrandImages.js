import React, { Component } from "react";

export default class CarBrandImages extends Component {
  render() {
    return this.props.images.map((image) => {
      return (
        <img src={image.logo} className="img-fluid brandImg shadow-sm" alt={image.alt} />
      );
    });
  }
}
