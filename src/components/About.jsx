import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialLinkedin,
} from "react-icons/sl";
import Picture from "./Picture";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full w-full p-8 lg:p-16 items-center">
      <div className="flex flex-col gap-4 w-full lg:w-4/5 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 py-8">
          About Me
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          I am a skilled Fullstack Developer with a solid foundation in both
          frontend and backend technologies. My expertise includes HTML5, CSS3,
          JavaScript, and React for frontend development, and Node.js, Express,
          and PostgreSQL for backend development.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          I recently completed a Fullstack Developer program at Progmatic
          Academy Kft., which has further honed my technical skills and prepared
          me for a successful career in software development. My background
          includes experience with Agile methodologies, Scrum, and version
          control using Git and GitHub.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          Fluent in Hungarian and with a working knowledge of English, I am
          passionate about continuous learning and excited to contribute to
          innovative projects in the tech industry.
        </p>
        <div className="flex flex-wrap justify-center gap-4 py-6">
          <a
            className="icon-wrapper border border-cyan-400 rounded-full p-2"
            target="_blank"
            href="https://www.linkedin.com/in/bence-salg%C3%B3i-54a9111b6/"
            rel="noopener noreferrer"
          >
            <SlSocialLinkedin className="text-cyan-400 text-3xl md:text-4xl" />
          </a>
          <a
            className="icon-wrapper border border-cyan-400 rounded-full p-2"
            target="_blank"
            href="https://github.com/mitosz11"
            rel="noopener noreferrer"
          >
            <SlSocialGithub className="text-cyan-400 text-3xl md:text-4xl" />
          </a>
          <a
            className="icon-wrapper border border-cyan-400 rounded-full p-2"
            target="_blank"
            href="https://www.facebook.com/bence.salgoi"
            rel="noopener noreferrer"
          >
            <SlSocialFacebook className="text-cyan-400 text-3xl md:text-4xl" />
          </a>
        </div>
      </div>
      <div className="w-full lg:w-3/5 mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <Picture />
      </div>
    </div>
  );
};

export default About;
