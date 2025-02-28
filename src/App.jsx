import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <a className="flex flex-col justify-between items-center" href="https://wa.me/923248988989" target="_blank" id="whatsapp-icon">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
        <p className="text-[#008c0f] text-xs">Contact Us</p>
      </a>
    </>
  );
};

export default App;
