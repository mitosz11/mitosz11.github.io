import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialLinkedin,
} from "react-icons/sl";
import Picture from "./Picture";

const About = () => {
  return (
    <div className="flex items-center justify-around h-full w-full p-8">
      <Picture />
      <div className="flex flex-col justify-center items-start gap-4 w-2/5">
        <h1 className="text-5xl font-bold text-cyan-300 py-8">About Me</h1>
        <p className="text-xl leading-relaxed text-gray-300">
          I am a skilled Fullstack Developer with a solid foundation in both
          frontend and backend technologies. My expertise includes HTML5, CSS3,
          JavaScript, and React for frontend development, and Node.js, Express,
          and PostgreSQL for backend development.
        </p>
        <p className="text-xl leading-relaxed text-gray-300">
          I recently completed a Fullstack Developer program at Progmatic
          Academy Kft., which has further honed my technical skills and prepared
          me for a successful career in software development. My background
          includes experience with Agile methodologies, Scrum, and version
          control using Git and GitHub.
        </p>
        <p className="text-xl leading-relaxed text-gray-300">
          Fluent in Hungarian and with a working knowledge of English, I am
          passionate about continuous learning and excited to contribute to
          innovative projects in the tech industry.
        </p>
        <div className="flex gap-4 py-6">
          <a
            className="icon-wrapper border border-cyan-400 rounded-full"
            target="_blank"
            href="https://www.linkedin.com/in/bence-salg%C3%B3i-54a9111b6/"
          >
            <SlSocialLinkedin className="text-cyan-400 text-4xl icon" />
          </a>
          <a
            className="icon-wrapper border border-cyan-400 rounded-full"
            target="_blank"
            href="https://github.com/mitosz11"
          >
            <SlSocialGithub className="text-cyan-400 text-4xl icon" />
          </a>
          <a
            className="icon-wrapper border border-cyan-400 rounded-full"
            target="_blank"
            href="https://www.facebook.com/bence.salgoi"
          >
            <SlSocialFacebook className="text-cyan-400 text-4xl icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
