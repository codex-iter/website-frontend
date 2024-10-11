import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/codex-logo.png";

const Loader = ({ loading }) => {
  const [showExplore, setShowExplore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowExplore(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="flex items-center justify-center h-screen bg-primary"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }} // Exit animation: fades and slides up
          transition={{ duration: 0.5 }}
        >
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
                animate={{ opacity: showExplore ? 1 : 0, y: showExplore ? -20 : 0 }}
                transition={{ duration: 0.25 }}
              >
                We <span className="text-secondary">Explore</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
