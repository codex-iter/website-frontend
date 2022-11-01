import React from "react";
import badge from "../assets/images/Badge.png";

const Testimonial = () => {
  return (
    <div className="py-16 lg:py-48 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-pastel p-12 max-w-4xl mx-auto rounded-lg flex flex-col md:flex-row">
          <img
            className="h-32 w-32 rounded-full"
            src="https://github.com/KejariwalAyush.png"
            alt="Segun"
          />
          <div className="md:ml-8 ">
            <h1 className="font-semibold text-2xl mt-2">Ayush Kejariwal</h1>
            <h4 className="text-sm text-slate-500">Head Coordinator, CODEX</h4>
            <p className="py-4">
            Every person is defined by their community and here we are creating an 
            environment where you can collaborate, learn, explore with us which 
            enhances your coding and thinking ability.                
            </p>
          </div>
          <img
            className="absolute -top-6 right-8 h-12 w-12"
            src={badge}
            alt="quote"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
