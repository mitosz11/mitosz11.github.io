import React from "react";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Content = ({ section, onSectionChange }) => {
  const renderSection = () => {
    switch (section) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
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
        <Navbar onSectionChange={onSectionChange} />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Content;
