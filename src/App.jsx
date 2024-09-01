import React, { useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
   useEffect(() => {
     toast.warning("This page is under development.")
   }, []);

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <section id="home" className="h-screen flex items-center justify-center">
        <Home />
      </section>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <About />
      </section>
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center"
      >
        <Skills />
      </section>
      <section
        id="portfolio"
        className="min-h-screen flex items-center justify-center"
      >
        <Portfolio />
      </section>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <Contact />
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
