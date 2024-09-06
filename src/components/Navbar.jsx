import React, { useState } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { GiSkills } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { BiSolidBriefcase } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full dark:bg-gray-900 p-3 md:p-4 fixed top-0 z-20 shadow-lg bg-gray-300">
      
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto">
        
        <Link to="home" smooth={true} duration={500} className="flex-shrink-0">
          <img className="w-24 cursor-pointer" src="/logo.png" alt="logo" />
        </Link>

        
        <div className="flex-grow flex justify-center gap-4 text-2xl">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            {t("home")}
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            {t("about")}
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            {t("skills")}
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            {t("projects")}
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-cyan-700 dark:text-cyan-300 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out cursor-pointer"
          >
            {t("contact")}
          </Link>
        </div>

        
        <div className="flex items-center space-x-4">
          <LanguageSelector /> 
          <ThemeToggle />
        </div>
      </div>

     
      <div className="md:hidden flex items-center justify-between">
        
        <Link to="home" smooth={true} duration={500} className="flex-shrink-0">
          <img className="w-16 cursor-pointer" src="/logo.png" alt="logo" />
        </Link>

        
        <div className="flex items-center space-x-5">
          <ThemeToggle />
          <LanguageSelector /> 
          <button
            onClick={toggleMenu}
            className="text-cyan-700 dark:text-cyan-300 focus:outline-none text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      
      <div
        className={`md:hidden flex flex-col items-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        
        <div className="flex flex-col items-center space-y-4 mt-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            <IoHomeSharp />
            {t("home")}
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            <GoPersonFill />
            {t("about")}
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            <GiSkills />
            {t("skills")}
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            <BiSolidBriefcase />
            {t("projects")}
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            <MdEmail />
            {t("contact")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
