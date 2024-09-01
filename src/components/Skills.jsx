import React from "react";

const skillsData = [
  { name: "HTML5", category: "Frontend", image: "/html5.png" },
  { name: "CSS3", category: "Frontend", image: "/css3.png" },
  { name: "Tailwind", category: "Frontend", image: "/tailwind.png" },
  { name: "React", category: "Frontend", image: "/react.png" },
  { name: "JavaScript", category: "Frontend", image: "/js.png" },
  { name: "PostgreSQL", category: "Backend", image: "/postgreSQL.png" },
  { name: "Node.js", category: "Backend", image: "/nodeJs.png" },
  { name: "TypeScript", category: "Frontend", image: "/ts.png" },
  { name: "Git", category: "Tool", image: "/git.png" },
];

const additionalSkills = [
  { name: "Java", image: "/java.png" },
  { name: "Angular", image: "/angular.png" },
  { name: "Vue.js", image: "/vue.png" },
  { name: "Python", image: "/python.png" },
];

const Skills = () => {
  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8">
      <h1 className="text-5xl font-bold text-cyan-400 pt-16">Skills</h1>
      <div className="flex flex-col md:flex-row w-full max-w-6xl justify-center gap-8">
        {["Frontend", "Backend", "Tool"].map((category) => (
          <div
            key={category}
            className="flex flex-col items-center w-full md:w-1/3 mb-8"
          >
            <h2 className="text-3xl font-bold text-cyan-300 mb-6">
              {category}
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {groupedSkills[category]?.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-4 mb-6 w-28 sm:w-32 skill-item"
                >
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-16 h-16 object-contain skill-image"
                    />
                  </div>
                  <span className="text-cyan-300 font-semibold text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
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
        <div className="grid grid-cols-2 gap-8 justify-center mb-4 max-w-md mx-auto">
          {additionalSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 skill-item"
            >
              <div className="relative w-24 h-24 flex items-center justify-center">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 object-contain skill-image"
                />
              </div>
              <span className="text-cyan-300 font-semibold text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xl text-gray-300">
          I believe in the importance of staying updated and versatile in the
          tech industry. If you have any interesting projects or technologies
          that you think I should explore, feel free to reach out. I am always
          open to new challenges and opportunities for growth!
        </p>
      </div>
    </div>
  );
};

export default Skills;
