import React, { useRef, useEffect, useState } from "react";

const skillsData = [
  { name: "HTML5", level: 100, image: "/html5.png" },
  { name: "CSS3", level: 80, image: "/css3.png" },
  { name: "Tailwind", level: 90, image: "/tailwind.png" },
  { name: "React", level: 95, image: "/react.png" },
  { name: "JavaScript", level: 90, image: "/js.png" },
  { name: "PostgreSQL", level: 70, image: "/postgreSQL.png" },
  { name: "Node.js", level: 70, image: "/nodeJs.png" },
  { name: "Typescript", level: 20, image: "/ts.png" },
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
    <div className="flex items-center justify-around h-full w-full p-8">
      <div className="flex flex-col justify-center items-start gap-4 w-2/5">
        <h1 className="text-5xl font-bold text-cyan-400 py-8">Skills</h1>
        <div className="flex flex-col gap-8">
          <p className="text-xl text-gray-300">
            I am passionate about continuous learning and expanding my skill
            set. I am eager to explore and master new technologies and tools. My
            goal is to stay adaptable and proficient in the ever-evolving tech
            landscape.
          </p>
          <p className="text-xl text-gray-300">
            With a solid foundation in frontend and backend technologies, I am
            actively interested in learning and working with additional
            frameworks and languages such as:
          </p>
          <ul className="list-disc list-inside text-xl text-gray-300">
            <li>Java</li>
            <li>Angular</li>
            <li>Vue.js</li>
            <li>TypeScript</li>
          </ul>
          <p className="text-xl text-gray-300">
            I believe in the importance of staying updated and versatile in the
            tech industry. If you have any interesting projects or technologies
            that you think I should explore, feel free to reach out. I am always
            open to new challenges and opportunities for growth!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/3 pt-8">
        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            {skillsData.slice(0, 1).map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-4 mb-6 w-28"
              >
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 object-contain z-10"
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
                <span className="text-cyan-300 font-semibold">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {skillsData.slice(1, 4).map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-4 mb-6 w-28"
              >
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 object-contain z-10"
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
                      ref={(el) => (progressBarRefs.current[index + 1] = el)}
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
                <span className="text-cyan-300 font-semibold">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {skillsData.slice(4, 10).map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-4 mb-6 w-28"
              >
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 object-contain z-10"
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
                      ref={(el) => (progressBarRefs.current[index + 4] = el)}
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
                <span className="text-cyan-300 font-semibold">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
