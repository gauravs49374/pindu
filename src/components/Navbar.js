import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinkClasses =
    "px-4 py-2 border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded transform hover:scale-110";

  // Handles mobile link click to close the menu
  const handleLinkClick = () => setOpen(false);

  return (
    <nav
      style={{ backgroundColor: "#d7dde4" }}
      className="shadow-md fixed w-full z-10 top-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="text-3xl font-bold px-4 py-2 text-[#242628]">
            The Himalayan Vista
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 text-2xl"
            >
              ☰
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className={navLinkClasses}>Home</Link>
            <Link to="/room" className={navLinkClasses}>Room</Link>
            <Link to="/full-personal-space" className={navLinkClasses}>Full Personal Space</Link>
            <Link to="/bike-rental" className={navLinkClasses}>Bike Rental</Link>
            <Link to="/explore-himachal" className={navLinkClasses}>Explore Himachal</Link>
            <Link to="/contact" className={navLinkClasses}>Contact Us</Link>
          </div>
        </div>

        {/* Mobile navigation (dropdown) */}
        {open && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            <Link to="/" onClick={handleLinkClick} className={navLinkClasses}>Home</Link>
            <Link to="/room" onClick={handleLinkClick} className={navLinkClasses}>Room</Link>
            <Link to="/full-personal-space" onClick={handleLinkClick} className={navLinkClasses}>Full Personal Space</Link>
            <Link to="/bike-rental" onClick={handleLinkClick} className={navLinkClasses}>Bike Rental</Link>
            <Link to="/explore-himachal" onClick={handleLinkClick} className={navLinkClasses}>Explore Himachal</Link>
            <Link to="/contact" onClick={handleLinkClick} className={navLinkClasses}>Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
