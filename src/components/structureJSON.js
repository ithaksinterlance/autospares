import React, { Component } from 'react';
import Home from "./Home";

class structureJSON extends Component {
  render() {
    let data = {
      "@context": "https://schema.org",
      "@type": "website",
      "name" : "hakstime",
      "location": {
        "@type": "Place",
        "name": ["Sharjah","Dubai"]
      },
      "makesOffer" : {
            "@type" :"Offer",
            "priceSpecification" : {
                "@type" : "UnitPriceSpecification",
                "priceCurrency" : "AED",
                "price" : "200" },
            "itemOffered" : {
                "@type" : "Car Battery",
                "name" : ["Amaron","solite","acdelco","varta"],
                "brand" : ["Amaron","solite","acdelco","varta"],
                "description" : "Car battery replacement sharjah , Car battery replacement Dubai, We provide battery delivery service and installation services. Amaron, solite, acdelco, varta are some of the brands that are best sellers.",
            "image" : ["product2.webp","product1.webp","product3.webp","product4.webp"],
            }
        },
        
    }
    return (
      <div>
        <Home jsonLd={data} title={"Car battery replacement sharjah"} description={"Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta."} />
        
      </div>
    );
  }
}

export default structureJSON;