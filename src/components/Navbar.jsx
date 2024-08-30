import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-gray-800 p-4 fixed top-0 z-20 shadow-md">
      <div className="flex items-center justify-center">

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-cyan-300 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-cyan-300 hover:text-cyan-500 text-lg cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-cyan-300 hover:text-cyan-500 text-lg cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-cyan-300 hover:text-cyan-500 text-lg cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="text-cyan-300 hover:text-cyan-500 text-lg cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-cyan-300 hover:text-cyan-500 text-lg cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden flex flex-col items-center mt-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-cyan-300 hover:text-cyan-500 text-lg mb-2 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-cyan-300 hover:text-cyan-500 text-lg mb-2 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="text-cyan-300 hover:text-cyan-500 text-lg mb-2 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          className="text-cyan-300 hover:text-cyan-500 text-lg mb-2 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Portfolio
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-cyan-300 hover:text-cyan-500 text-lg cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
