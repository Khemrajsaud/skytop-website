import { useState } from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";

import skytop from "../assets/Image/skytop log.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-blue-500 text-white py-2 px-4 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <span>01-24637466, 01-326374962762</span>
        </div>
        <div className="w-full md:w-1/2 my-2 md:my-0">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 text-black rounded-full outline-none"
          />
        </div>
        <div className="flex items-center gap-3 bg-blue-400 p-2 rounded-lg">
          <a href="#" className="text-white text-lg hover:opacity-75">
            <FaFacebookF className="bg-blue-600 rounded-full p-2 w-8 h-8" />
          </a>
          <a href="#" className="text-white text-lg hover:opacity-75">
            <FaXTwitter className="bg-black rounded-full p-2 w-8 h-8" />
          </a>
          <a href="#" className="text-white text-lg hover:opacity-75">
            <FaLinkedinIn className="bg-blue-500 rounded-full p-2 w-8 h-8" />
          </a>
          <a href="#" className="text-white text-lg hover:opacity-75">
            <FaInstagram className="bg-red-500 rounded-full p-2 w-8 h-8" />
          </a>
          <a href="#" className="text-white text-lg hover:opacity-75">
            <FaTiktok className="bg-black rounded-full p-2 w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white shadow-md py-2 px-6 flex items-center justify-between">
        <img src={skytop} alt="Logo" className="w-[200px] md:w-[250px]" />
        <nav className="hidden md:flex gap-6 text-black font-medium">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500">
            About Us
          </Link>
          <Link to="/programs" className="hover:text-blue-500">
            Program
          </Link>
          <Link to="/gallery" className="hover:text-blue-500">
            Gallery
          </Link>
          <Link to="/news" className="hover:text-blue-500">
            News & Media
          </Link>
          <Link to="/contacts" className="hover:text-blue-500">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col  bg-white shadow-lg p-4 space-y-4">
          <Link
            to="/"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/program"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Program
          </Link>
          <Link
            to="/gallery"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/news"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            News & Media
          </Link>
          <Link
            to="/contacts"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
