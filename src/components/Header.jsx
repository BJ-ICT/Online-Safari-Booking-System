import React from "react";
import { FaSearch } from "react-icons/fa";
import LogoImage from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Header = ({ onLogin }) => {
  return (
    <BrowserRouter>
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Left: Logo */}
      <Link to="/" className="flex items-center gap-2 w-150 h-150">
        <img src={LogoImage} alt="Safari Logo" className="h-10" />
        <h1 className="text-x1 font-bold text-gray-800">Jungle Journey</h1>
      </Link>
      

      {/* Center: Navigation Menu */}
      <nav>
        <ul className="flex gap-8 text-lg font-semibold">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">About Us</li>
          <li className="text-green-600 font-bold cursor-pointer">Safari Packages</li>
          <li className="hover:text-green-600 cursor-pointer">Contact Us</li>
        </ul>
      </nav>

      {/* Right: Search Icon */}
      <div className="cursor-pointer text-gray-700 hover:text-gray-900">
        <FaSearch size={20} />
      </div>

      <button 
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        onClick={onLogin} 
        aria-label="Login to Safari Booking"
      >
        Login
      </button>

    </header>
    </BrowserRouter>
  );
};

export default Header;
