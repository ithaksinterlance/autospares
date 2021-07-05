import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default class CarBrandImages extends Component {
  render() {
    return this.props.images.map((image) => {
      return (
        <LazyLoadImage
          alt={image.alt}
          effect="opacity"
          className="img-fluid brandImg shadow-sm"
          src={image.logo}
        />
      );
    });
  }
}
