import React, { useState, useEffect, useRef } from "react";

const skillsData = [
  { name: "HTML5", level: 100, image: "/html5.png" },
  { name: "CSS3", level: 80, image: "/css3.png" },
  { name: "Tailwind", level: 90, image: "/tailwind.png" },
  { name: "React", level: 95, image: "/react.png" },
  { name: "JavaScript", level: 90, image: "/js.png" },
  { name: "PostgreSQL", level: 70, image: "/postgreSQL.png" },
  { name: "Node.js / Express ( REST API )", level: 70, image: "/nodeJs.png" },
];

const Skills = ({ isVisible }) => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const progressBarRefs = useRef([]);

  useEffect(() => {
    if (isVisible) {
      setAnimationTriggered(true);
      progressBarRefs.current.forEach((bar, index) => {
        if (bar) {
          bar.style.width = `${skillsData[index].level}%`;
        }
      });
    } else {
      setAnimationTriggered(false);
      progressBarRefs.current.forEach((bar) => {
        if (bar) {
          bar.style.width = "0%";
        }
      });
    }
  }, [isVisible]);

  return (
    <div className="flex flex-col justify-center w-2/5 pt-24 pl-20">
      <h1 className="text-4xl font-bold text-cyan-400 pb-10">Skills</h1>
      {skillsData.map((skill, index) => (
        <div key={skill.name} className="flex items-center gap-4 mb-6">
          <img
            src={skill.image}
            alt={skill.name}
            className="w-16 h-16 object-contain"
          />
          <div className="flex-1">
            <div className="text-xl mb-2 text-white">
              {skill.name}
            </div>
            <div className="w-full bg-gray-600 rounded-full h-4 relative overflow-hidden">
              <div
                ref={(el) => (progressBarRefs.current[index] = el)}
                className={`h-full bg-cyan-500 transition-all duration-1000 flex items-center justify-center text-black`}
                style={{ width: "0%" }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                  {skillsData[index].level}%
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
