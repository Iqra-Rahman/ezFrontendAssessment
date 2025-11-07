import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f8e7df] shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-32 h-auto" />
          </Link>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-gray-700 hover:text-orange-600 transition">
            About Us
          </Link>
          <Link to="/team" className="text-gray-700 hover:text-orange-600 transition">
            About Team
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-orange-600 transition">
            Services
          </Link>
          <Link to="/varnan" className="text-gray-700 hover:text-orange-600 transition">
            Varnan
          </Link>
          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full flex items-center space-x-2 transition"
          >
            <span>Let's Talk</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#f8e7df] border-t border-gray-300 px-6 py-4 flex flex-col space-y-4">
          <Link
            to="/about"
            className="text-gray-700 hover:text-orange-600 transition"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/team"
            className="text-gray-700 hover:text-orange-600 transition"
            onClick={() => setIsOpen(false)}
          >
            About Team
          </Link>
          <Link
            to="/services"
            className="text-gray-700 hover:text-orange-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/varnan"
            className="text-gray-700 hover:text-orange-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Varnan
          </Link>
          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full flex items-center justify-center space-x-2 transition"
            onClick={() => setIsOpen(false)}
          >
            <span>Let's Talk</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
