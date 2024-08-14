import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Content = ({ section, onSectionChange }) => {
  const [currentSection, setCurrentSection] = useState(section);
  const [animationClass, setAnimationClass] = useState("section-enter");
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  useEffect(() => {
    if (section !== currentSection) {
      setAnimationClass("section-exit");
      const timer = setTimeout(() => {
        setCurrentSection(section);
        setAnimationClass("section-enter");
      }, 100);

      return () => clearTimeout(timer);
    }

    setIsSkillsVisible(section === "skills");
  }, [section, currentSection]);

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "skills":
        return <Skills isVisible={isSkillsVisible} />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-cyan-700">
      <div className="relative bg-gray-900 rounded-3xl shadow-2xl shadow-slate-900 w-11/12 h-[90vh]">
        <Navbar section={section} onSectionChange={onSectionChange} />
        <div
          className={`absolute inset-0 text-white transition-opacity duration-500 ${animationClass}`}
        >
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Content;
