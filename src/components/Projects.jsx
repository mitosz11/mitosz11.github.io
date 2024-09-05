import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: "/gggaming.png",
      title: t("gg_gaming_title"),
      description: t("gg_gaming_description"),
      technologies: [
        { name: "React", icon: "/react.png" },
        { name: "Tailwind", icon: "/tailwind.png" },
        { name: "Firebase", icon: "/firebase.png" },
      ],
      link: "https://projekt-team-01.web.app",
    },
    {
      image: "/kartkingdom.png",
      title: t("kart_kingdom_title"),
      description: t("kart_kingdom_description"),
      technologies: [
        { name: "React", icon: "/react.png" },
        { name: "Tailwind", icon: "/tailwind.png" },
        { name: "PostgreSQL", icon: "/postgreSQL.png" },
        { name: "Node.js", icon: "/nodeJs.png" },
        { name: "Express.js", icon: "/express.png" },
      ],
      link: "https://kartkingdom.vercel.app",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center dark:text-cyan-300 text-cyan-700 py-16">
        {t("my_projects")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
