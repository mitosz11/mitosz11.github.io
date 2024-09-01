import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-gray-900 p-3 md:p-4 fixed top-0 z-20 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <img className="w-16" src="/logo.png" alt="logo" />

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-cyan-300 focus:outline-none text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex space-x-8 items-center text-2xl ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-cyan-300 hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-cyan-300 hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-cyan-300 hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-cyan-300 hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-cyan-300 hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden flex flex-col items-center mt-4 space-y-2 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-cyan-300 hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-cyan-300 hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="text-cyan-300 hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-cyan-300 hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-cyan-300 hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
