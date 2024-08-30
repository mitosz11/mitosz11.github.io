import React, { useRef, useEffect, useState } from "react";

const skillsData = [
  { name: "HTML5", level: 100, image: "/html5.png" },
  { name: "CSS3", level: 100, image: "/css3.png" },
  { name: "Tailwind", level: 100, image: "/tailwind.png" },
  { name: "React", level: 100, image: "/react.png" },
  { name: "JavaScript", level: 100, image: "/js.png" },
  { name: "PostgreSQL", level: 100, image: "/postgreSQL.png" },
  { name: "Node.js", level: 100, image: "/nodeJs.png" },
  { name: "TypeScript", level: 100, image: "/ts.png" },
];

const Skills = ({ isVisible }) => {
  const progressBarRefs = useRef([]);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (isVisible && !animationTriggered) {
      setAnimationTriggered(true);
      setTimeout(() => {
        progressBarRefs.current.forEach((bar, index) => {
          if (bar) {
            bar.style.transition = "stroke-dashoffset 2s ease";
            bar.style.opacity = 1;
            bar.style.strokeDashoffset =
              282.6 - (282.6 * skillsData[index].level) / 100;
          }
        });
      }, 100);
    }
  }, [isVisible, animationTriggered]);

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8 mx-">
      <h1 className="text-5xl font-bold text-cyan-400 py-8">Skills</h1>
      <div className="text-center">
        <p className="text-xl text-gray-300 mb-4">
          I am passionate about continuous learning and expanding my skill set.
          I am eager to explore and master new technologies and tools. My goal
          is to stay adaptable and proficient in the ever-evolving tech
          landscape.
        </p>
        <p className="text-xl text-gray-300 mb-4">
          With a solid foundation in frontend and backend technologies, I am
          actively interested in learning and working with additional frameworks
          and languages such as:
        </p>
        <ul className="list-disc list-inside text-xl text-gray-300 mb-4">
          <li>Java</li>
          <li>Angular</li>
          <li>Vue.js</li>
          <li>Python</li>
        </ul>
        <p className="text-xl text-gray-300">
          I believe in the importance of staying updated and versatile in the
          tech industry. If you have any interesting projects or technologies
          that you think I should explore, feel free to reach out. I am always
          open to new challenges and opportunities for growth!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {skillsData.map((skill, index) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-4 mb-6 w-28"
          >
            <div className="relative w-28 h-28 flex items-center justify-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#2d3748"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  ref={(el) => (progressBarRefs.current[index] = el)}
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#22d3ee"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="282.6"
                  strokeDashoffset="282.6"
                  style={{
                    opacity: 0,
                    transition: "stroke-dashoffset 2s ease, opacity 0.5s",
                    transform: "rotate(-90deg)",
                    transformOrigin: "center",
                    zIndex: 5,
                  }}
                />
              </svg>
            </div>
            <span className="text-cyan-300 font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
