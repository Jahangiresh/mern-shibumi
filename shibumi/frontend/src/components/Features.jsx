import React from "react";
import "./features.scss";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="features col-lg-3 col-md-6 col-12"
      >
        <h2>Happy shopping with free returns</h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="features col-lg-3 col-md-6 col-12"
      >
        <h2> Free shipping onorders $59+</h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="features col-lg-3 col-md-6 col-12"
      >
        <h2> Quality 24h customer service</h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="features col-lg-3 col-md-6 col-12"
      >
        <h2> Free gift box for special occasions</h2>
      </div>
    </>
  );
};

export default Features;
