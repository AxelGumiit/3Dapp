import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-md shadow-lg flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-bold tracking-wide text-blue-600 hover:text-blue-700 transition"
      >
        Car Showroom
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 text-sm font-semibold text-gray-700">
        <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
        <li><Link to="/models" className="hover:text-blue-600 transition">Models</Link></li>
        <li><Link to="/statement-of-originality" className="hover:text-blue-600 transition">Statement of Originality</Link></li>
        <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-3xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <div
            className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-95 z-[9999] flex flex-col items-end p-6 transform transition-transform duration-300 ease-in-out translate-x-0"
        >
            <button
            onClick={toggleMenu}
            className="text-3xl text-white mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close Menu"
            >
            ×
            </button>
            <nav className="w-full flex bg-black flex-col items-center gap-8 text-lg font-semibold text-white">
            <Link to="/" onClick={toggleMenu} className="hover:text-blue-400 transition">Home</Link>
            <Link to="/models" onClick={toggleMenu} className="hover:text-blue-400 transition">Models</Link>
            <Link to="/statement-of-originality" onClick={toggleMenu} className="hover:text-blue-400 transition">Statement of Originality</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-blue-400 transition">About</Link>
            </nav>
        </div>
        )}

    </nav>
  );
};

export default Navbar;

