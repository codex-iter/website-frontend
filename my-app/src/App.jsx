import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";
import Community from "./pages/Community";
import Events from "./pages/Events";
import Base from "./layouts/Base";
import Subscribe from "./components/Subscribe";
import Loader from "./components/Loader";
import NewsletterPage from "./pages/NewsletterPage";

// Custom hook to handle the loader
const useLoader = (duration = 1500) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer); // This is the cleanup timer
  }, [duration]);
  return loading;
};

export default function App() {
  const [isVisible, setVisible] = useState(false);
  const loading = useLoader(); // Loader logic

  return (
    <div className="bg-primary">
      {isVisible && <Subscribe handle={setVisible} />}
      {loading && <Loader loading={loading} />}
      {!loading && (
        <motion.div
          initial={{ filter: "blur(10px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          className="transition-all duration-400"
        >
          <BrowserRouter>
            <Base>
              <Routes>
                <Route path="/" element={<Home handle={setVisible} />} />
                <Route path="/about-us" element={<About handle={setVisible} />} />
                <Route path="/community" element={<Community />} />
                <Route path="/events" element={<Events />} />
                {/* <Route path="/contact-us" element={<ContactForm />} /> */}
                <Route path="/newsletter" element={<NewsletterPage handle={setVisible} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Base>
          </BrowserRouter>
        </motion.div>
      )}
    </div>
  );
}
