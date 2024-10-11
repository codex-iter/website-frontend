// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";
import Community from "./pages/Community";
import ContactForm from "./pages/Contact";
import Events from "./pages/Events";
import Base from "./layouts/Base";
import Subscribe from "./components/Subscribe";
import Loader from "./components/Loader";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // I have Adjusted loader time to 1.5 seconds for smoother transition

    return () => clearTimeout(timer); // Cleaning up timer
  }, []);

  const handleSetVisible = (value) => setIsVisible(value);

  return (
    <div className="bg-primary">
      {isVisible && <Subscribe handle={handleSetVisible} />}
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Base>
            <Routes>
              <Route path="/" element={<Home handle={handleSetVisible} />} />
              <Route path="/about-us" element={<About handle={handleSetVisible} />} />
              <Route path="/community" element={<Community />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact-us" element={<ContactForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Base>
        </BrowserRouter>
      )}
    </div>
  );
}
