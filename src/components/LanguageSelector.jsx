import React, { useState, useEffect, useRef } from "react";
import i18n from "../i18n"; 

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang); 
    setIsOpen(false);
  };

  const oppositeLanguage = selectedLanguage === "en" ? "hu" : "en";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 text-cyan-700 dark:text-cyan-300 focus:outline-none"
      >
        <span>{selectedLanguage.toUpperCase()}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg">
          {selectedLanguage !== "en" && (
            <button
              onClick={() => handleLanguageChange("en")}
              className="px-6 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left flex items-center justify-center"
            >
              <img src="/en.jpg" alt="English flag" className="w-6 h-4 mr-2" />
              EN
            </button>
          )}
          {selectedLanguage !== "hu" && (
            <button
              onClick={() => handleLanguageChange("hu")}
              className="px-6 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left flex items-center justify-center"
            >
              <img
                src="/hun.png"
                alt="Hungarian flag"
                className="w-6 h-4 mr-2"
              />
              HU
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
