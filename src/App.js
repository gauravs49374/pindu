import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactPage from "./components/ContactPage";
import Room from "./components/Room";
import FullPersonalSpace from "./components/FullPersonalSpace";

function Home() {
  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="pt-20 px-4">
      <div
        className="p-8 shadow-lg text-center rounded-xl mb-6"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button>
          <h1
            onClick={() => window.open("https://www.google.com", "_blank")}
            className="text-3xl md:text-5xl font-bold text-white-100 bg-white/40 px-6 py-4 rounded"
          >
            Tap Book now!
          </h1>
        </button>
      </div>

      {/* Add Contact section at the end of Home */}
      <ContactPage />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Room" element={<Room />} />
<Route path="/full-personal-space" element={<FullPersonalSpace />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
