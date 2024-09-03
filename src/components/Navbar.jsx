// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full dark:bg-gray-900 p-3 md:p-4 fixed top-0 z-20 shadow-lg bg-gray-300">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
          <img className="w-24" src="/logo.png" alt="logo" />

        {/* Navigation Links */}
        <div className="flex-grow flex justify-center gap-4 text-2xl">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Dark Mode Toggle */}
          <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img className="w-16" src="/logo.png" alt="logo" />
        </div>

        {/* Dark Mode Toggle and Menu Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-cyan-700 dark:text-cyan-300 focus:outline-none text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden flex flex-col items-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-4 mt-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
