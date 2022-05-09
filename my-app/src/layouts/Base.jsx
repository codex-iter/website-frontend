import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Base = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Base;
