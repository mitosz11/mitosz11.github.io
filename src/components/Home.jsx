import { IoDocumentTextOutline } from "react-icons/io5";
import {
  SlSocialLinkedin,
  SlSocialGithub,
  SlSocialFacebook,
} from "react-icons/sl";

const Home = () => {
  return (
    <div className="flex items-center justify-around h-full w-full p-8">
      <div className="flex flex-col justify-center items-start gap-4 w-2/5">
        <h3 className="text-6xl">Hello, it's me</h3>
        <h1 className="text-8xl font-bold">Bence Salgói</h1>
        <span className="text-4xl">
          And I'm a{" "}
          <span className="text-cyan-400 font-bold">Fullstack Developer</span>
        </span>
        <span className="text-lg">
          I'm a passionate Fullstack Developer with a love for creating
          intuitive and engaging web applications. Explore my portfolio to see
          some of my latest work!
        </span>
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
        <div className="flex gap-4">
          <a
            href="/hunCV.pdf"
            download
            className="flex items-center justify-center w-48 h-12 text-lg font-semibold text-white hover:text-cyan-700 bg-cyan-500 rounded-lg hover:bg-cyan-300 transition duration-300"
          >
            <IoDocumentTextOutline className="text-2xl mr-2" />
            Hungarian CV
          </a>
          <a
            href="/engCV.pdf"
            download
            className="flex items-center justify-center w-48 h-12 text-lg font-semibold text-white hover:text-cyan-700 bg-cyan-500 rounded-lg hover:bg-cyan-300 transition duration-300"
          >
            <IoDocumentTextOutline className="text-2xl mr-2" />
            English CV
          </a>
        </div>
      </div>
      <div>
        <img
          className="w-144 rounded-full drop-shadow-[10px_10px_50px_rgba(14,116,144,0.8)]"
          src="/me.png"
          alt="me"
        />
      </div>
    </div>
  );
};

export default Home;
