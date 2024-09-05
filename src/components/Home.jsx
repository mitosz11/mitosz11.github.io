import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  SlSocialLinkedin,
  SlSocialGithub,
  SlSocialFacebook,
} from "react-icons/sl";
import "../index.css";

const Home = () => {
  const { t } = useTranslation();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("typing-effect typing");

  const texts = t("titles", { returnObjects: true });

  useEffect(() => {
    const typingDuration = 2000;
    const pauseDuration = 1000;

    const typingInterval = setInterval(() => {
      setAnimationClass("typing-effect typing");
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, typingDuration + pauseDuration);

    return () => clearInterval(typingInterval);
  }, [texts.length]);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setAnimationClass("typing-effect hidden");
    }, 2000);

    return () => clearTimeout(typingTimeout);
  }, [currentTextIndex]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full px-8">
      <div className="flex flex-col gap-3 w-full lg:w-2/5 text-center">
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {t("hello")}
          </h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
            {t("name")}
          </h1>
          <span
            className={`dark:text-cyan-300 text-cyan-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl ${animationClass}`}
          >
            {texts[currentTextIndex]}
          </span>
        </div>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl">
          {t("intro_text")}
        </span>
        <div className="flex flex-wrap gap-4 py-6 justify-center">
          <a
            className="icon-wrapper border dark:border-cyan-400 border-cyan-700 rounded-full p-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/bence-salg%C3%B3i-54a9111b6/"
          >
            <SlSocialLinkedin className="dark:text-cyan-400 text-cyan-700 dark:hover:border-cyan-300 hover:border-cyan-700 text-3xl md:text-4xl icon" />
          </a>
          <a
            className="icon-wrapper border dark:border-cyan-400 border-cyan-700 rounded-full p-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mitosz11"
          >
            <SlSocialGithub className="dark:text-cyan-400 text-cyan-700 dark:hover:border-cyan-300 hover:border-cyan-700 text-3xl md:text-4xl icon" />
          </a>
          <a
            className="icon-wrapper border dark:border-cyan-400 border-cyan-700 rounded-full p-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/bence.salgoi"
          >
            <SlSocialFacebook className="dark:text-cyan-400 text-cyan-700 dark:hover:border-cyan-300 hover:border-cyan-700 text-3xl md:text-4xl icon" />
          </a>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <a
            href="/hunCV.pdf"
            download
            className="flex items-center justify-center w-full sm:w-auto md:w-48 h-12 text-base sm:text-lg font-semibold text-white hover:text-cyan-700 bg-cyan-700 rounded-lg hover:bg-cyan-300 transition duration-300"
          >
            <IoDocumentTextOutline className="text-lg sm:text-xl md:text-2xl mr-2" />
            {t("hungarian_cv")}
          </a>
          <a
            href="/engCV.pdf"
            download
            className="flex items-center justify-center w-full sm:w-auto md:w-48 h-12 text-base sm:text-lg font-semibold text-white hover:text-cyan-700 bg-cyan-700 rounded-lg hover:bg-cyan-300 transition duration-300"
          >
            <IoDocumentTextOutline className="text-lg sm:text-xl md:text-2xl mr-2" />
            {t("english_cv")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
