import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";
import Community from "./pages/Community";
import ContactForm from "./pages/Contact";
import Events from "./pages/Events";
import Base from "./layouts/Base";
import Subscribe from "./components/Subscribe";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);  
  
  const handleSetVisible = (value)=>{
    setIsVisible(value);
  };

  return (
    <div className="bg-primary">
      {isVisible&&<Subscribe handle={handleSetVisible} />}
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
    </div>
  );
}
