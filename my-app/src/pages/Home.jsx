import React from "react";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Statistics from "../components/Statistics";
import Testimonial from "../components/Testimonial";

const Home = (props) => {
  return (
    <>
      <Hero />
      <Statistics />
      <Testimonial />
      <Newsletter handle={props.handle} />
    </>
  );
};

export default Home;
