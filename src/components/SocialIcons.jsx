import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialLinkedin,
} from "react-icons/sl";

const SocialIcons = () => {
  return (
    <>
      <a
        className="icon-wrapper border dark:border-cyan-400 border-cyan-700 rounded-full p-2"
        target="_blank"
        href="https://www.linkedin.com/in/bence-salg%C3%B3i-54a9111b6/"
        rel="noopener noreferrer"
      >
        <SlSocialLinkedin className="dark:text-cyan-400 text-cyan-700 dark:hover:border-cyan-300 hover:border-cyan-700 text-2xl md:text-3xl" />
      </a>
      <a
        className="icon-wrapper border dark:border-cyan-400 border-cyan-700 rounded-full p-2"
        target="_blank"
        href="https://github.com/mitosz11"
        rel="noopener noreferrer"
      >
        <SlSocialGithub className="dark:text-cyan-400 text-cyan-700 dark:hover:border-cyan-300 hover:border-cyan-700 text-2xl md:text-3xl" />
      </a>
      <a
        className="icon-wrapper border dark:border-cyan-400 border-cyan-700 rounded-full p-2"
        target="_blank"
        href="https://www.facebook.com/bence.salgoi"
        rel="noopener noreferrer"
      >
        <SlSocialFacebook className="dark:text-cyan-400 text-cyan-700 dark:hover:border-cyan-300 hover:border-cyan-700 text-2xl md:text-3xl" />
      </a>
    </>
  );
};

export default SocialIcons;

