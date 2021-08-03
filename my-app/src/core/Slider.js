import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-elastic-carousel";
import Testimonial from "./Testimonial";
const Slider = () => {
  // const [width, setWidth] = useState(window.innerWidth);
  // const [show, setShow] = useState(false);
  // const handleShow = () => {
  //   setWidth(window.innerWidth);
  //   if (width <= 400) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // };
  // useEffect(() => {
  //   handleShow();
  // });

  // window.addEventListener("resize", handleShow);
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
