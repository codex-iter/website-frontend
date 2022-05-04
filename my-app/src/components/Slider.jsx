import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-elastic-carousel";
import Testimonial from "./Testimonial";

const Slider = () => {
  return (
    <>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showArrows={true}
        showThumbs={false}
      >
        <Testimonial></Testimonial>
        <Testimonial></Testimonial>
        <Testimonial></Testimonial>
        <Testimonial></Testimonial>
      </Carousel>
    </>
  );
};

export default Slider;
