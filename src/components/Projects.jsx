import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "/gggaming.png",
    title: "GG Gaming",
    description:
      "Discover a wide range of downloadable games in our online shop, offering secure payment options through Barion and PayPal. Whether you're a fan of action, adventure, or strategy games, you'll find something to enjoy. Download your favorite games instantly and start playing today!",
    technologies: [
      { name: "React", icon: "/react.png" },
      { name: "Tailwind", icon: "/tailwind.png" },
      { name: "Firebase", icon: "/firebase.png" },
    ],
    link: "https://projekt-team-01.web.app",
  },
  {
    image: "/kartkingdom.png",
    title: "Kart Kingdom",
    description:
      "Book your go-karting sessions and shop for related equipment and accessories all in one place. Our platform offers a seamless experience with secure payment options through Barion and PayPal. Enjoy the convenience of online booking and purchasing, along with features like live chat for instant assistance and a product rating system to help you make informed decisions. Whether you're gearing up for your next race or simply looking for quality go-karting gear, we've got you covered!",
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

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-300 py-16">
        My Projects
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
