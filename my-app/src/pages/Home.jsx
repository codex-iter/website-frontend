import React from "react";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Statistics from "../components/Statistics";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <Testimonial />
      <Newsletter />
    </>
  );
};

export default Home;
