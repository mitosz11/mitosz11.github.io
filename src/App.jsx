import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills"; // Importáld be a Skills komponenst
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import { useEffect, useState } from "react";

function App() {
  const [skillsVisible, setSkillsVisible] = useState(false);

  // Ellenőrzi, hogy a Skills szakasz látható-e
  const handleScroll = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      const sectionTop = skillsSection.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      if (sectionTop < viewportHeight) {
        setSkillsVisible(true);
      } else {
        setSkillsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        <Skills isVisible={skillsVisible} />
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
    </div>
  );
}

export default App;
