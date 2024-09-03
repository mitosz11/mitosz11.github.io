import { FaLongArrowAltRight } from "react-icons/fa";

const ProjectCard = ({ image, title, description, technologies, link }) => {
  return (
    <div className="flex flex-col bg-gray border dark:border-cyan-300 border-cyan-700 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="dark:text-gray-400 text-gray-700 mb-4">{description}</p>
        </div>
        <div className="flex space-x-5 justify-center mb-4">
          {technologies.map((tech, index) => (
            <img
              key={index}
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 object-contain"
            />
          ))}
        </div>
        <div className="text-right">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-cyan-300 text-cyan-700 dark:hover:text-cyan-700 hover:text-cyan-300 font-semibold"
          >
            View Project &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
