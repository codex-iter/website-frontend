// src/components/Loader.jsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/codex-logo.png";

const Loader = () => {
  const [showExplore, setShowExplore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowExplore(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div className="flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-25" />

        <div className="relative text-white text-1xl mt-0.5">
          <motion.div
            className="relative"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: showExplore ? 0 : 1, y: showExplore ? -20 : 0 }}
            transition={{ duration: 0.25 }}
          >
            We <span className="text-secondary">Code</span>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showExplore ? 1 : 0, y: showExplore ? 0 : 20 }}
            transition={{ duration: 0.25 }}
          >
            We <span className="text-secondary">Explore</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
