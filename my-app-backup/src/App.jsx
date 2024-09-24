import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";
import Community from "./pages/Community";
import ContactForm from "./pages/Contact";
import Events from "./pages/Events";
import Base from "./layouts/Base";

export default function App() {
  return (
    <div className="bg-primary">
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
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
