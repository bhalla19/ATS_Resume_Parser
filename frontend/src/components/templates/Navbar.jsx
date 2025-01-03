import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold font-serif">
          <Link to="/"> Parser<span className="text-blue-400">Peak</span></Link>
        </div>

        <button
          onClick={toggleMenu}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:space-x-6 text-lg`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mt-4 sm:mt-0">
            <li>
              <Link
                to="/"
                className="hover:text-blue-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-300 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-300 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/extractedResume"
                className="hover:text-blue-300 transition duration-300"
              >
                Your Extracted Resumes List
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;