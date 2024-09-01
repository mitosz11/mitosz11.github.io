const ProjectCard = ({ image, title, description, technologies, link }) => {
  return (
    <div className="flex flex-col bg-gray border border-cyan-300 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
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
            className="text-cyan-500 hover:text-cyan-700 font-semibold"
          >
            View Project &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
