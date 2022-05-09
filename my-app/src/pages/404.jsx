import React from "react";

import error from "../assets/icons/error.svg";

const NotFound = () => {
  return (
    <div className="py-12 lg:py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img src={error} alt="404 Not Found" />
        <h1 className="text-4xl tracking-tight font-extrabold text-pastel sm:text-5xl md:text-6xl my-8">
          Bummer, Page not found.
        </h1>
        <p className="text-base text-slate-400 sm:mb-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Something cool is coming soon. Stay tuned.
        </p>
        <a
          href="/"
          className="w-full max-w-xs mt-10 flex items-center justify-center px-8 py-2 border border-transparent text-lg font-semibold rounded-lg text-slate-800 bg-secondary hover:scale-105 will-change-transform transition-transform md:py-4 md:text-lg md:px-10"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
