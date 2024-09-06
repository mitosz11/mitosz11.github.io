import React from "react";
import { useTranslation } from "react-i18next";

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
  { name: "Express", category: "Backend", image: "/express.png" },
  { name: "Vite", category: "Tool", image: "/vite.png" },
  { name: "VS Code", category: "Tool", image: "/vscode.png" },
  { name: "Prisma", category: "Backend", image: "/prisma.png" },
];

const additionalSkills = [
  { name: "Java", image: "/java.png" },
  { name: "Angular", image: "/angular.png" },
  { name: "Vue.js", image: "/vue.png" },
  { name: "Python", image: "/python.png" },
];

const Skills = () => {
  const { t } = useTranslation();

  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8">
      <h1 className="text-5xl font-bold dark:text-cyan-300 text-cyan-700 py-16">
        {t("skills_title")}
      </h1>
      <div className="flex flex-col md:flex-row w-full max-w-6xl justify-center gap-8">
        {["Frontend", "Backend", "Tool"].map((category, index) => (
          <div
            key={category}
            className={`flex flex-col items-center w-full md:w-1/3 mb-8 ${
              index === 1 ? "md:border-r md:border-l border-cyan-300" : ""
            }`}
          >
            <h2 className="text-3xl font-bold dark:text-cyan-300 text-cyan-700 mb-6">
              {t(category.toLowerCase())}
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
                  <span className="dark:text-cyan-300 text-cyan-700 font-semibold text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-xl dark:text-gray-300 text-black mb-4">
          {t("passion_text")}
        </p>
        <p className="text-xl dark:text-gray-300 text-black mb-4">
          {t("interest_text")}
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
              <span className="dark:text-cyan-300 text-cyan-700 font-semibold text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xl dark:text-gray-300 text-black">
          {t("believe_text")}
        </p>
      </div>
    </div>
  );
};

export default Skills;
