import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Link } from "react-router-dom";

export default class CarBrandImages extends Component {
  render() {
    return this.props.images.map((image) => {
      return (
        <Link to="/contact" title="car make battery">
          <LazyLoadImage
            alt={image.alt}
            effect="opacity"
            className="img-fluid brandImg shadow-sm"
            src={image.logo}
          />
        </Link>
      );
    });
  }
}
