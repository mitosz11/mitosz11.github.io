import React from "react";
import { useTranslation } from "react-i18next";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialLinkedin,
} from "react-icons/sl";
import Picture from "./Picture";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row h-full w-full p-8 lg:p-16 items-center">
      <div className="flex flex-col gap-4 w-full lg:w-4/5 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold dark:text-cyan-300 text-cyan-700 pt-16">
          {t("about_me_title")}
        </h1>
        <p className="text-lg md:text-xl leading-relaxed dark:text-gray-300 text-black">
          {t("about_me_1")}
        </p>
        <p className="text-lg md:text-xl leading-relaxed dark:text-gray-300 text-black">
          {t("about_me_2")}
        </p>
        <p className="text-lg md:text-xl leading-relaxed dark:text-gray-300 text-black">
          {t("about_me_3")}
        </p>
        <div className="flex flex-wrap gap-4 py-6">
          <a
            className="icon-wrapper border dark:border-cyan-400 border-cyan-700 rounded-full p-2"
            target="_blank"
            href="https://www.linkedin.com/in/bence-salg%C3%B3i-54a9111b6/"
            rel="noopener noreferrer"
          >
            <SlSocialLinkedin className="dark:text-cyan-400 text-cyan-700 dark:hover:border-cyan-300 hover:border-cyan-700 text-3xl md:text-4xl" />
          </a>
          <a
            className="icon-wrapper border dark:border-cyan-400 border-cyan-700 rounded-full p-2"
            target="_blank"
            href="https://github.com/mitosz11"
            rel="noopener noreferrer"
          >
            <SlSocialGithub className="dark:text-cyan-400 text-cyan-700 text-3xl md:text-4xl" />
          </a>
          <a
            className="icon-wrapper border dark:border-cyan-400 border-cyan-700 rounded-full p-2"
            target="_blank"
            href="https://www.facebook.com/bence.salgoi"
            rel="noopener noreferrer"
          >
            <SlSocialFacebook className="dark:text-cyan-400 text-cyan-700 text-3xl md:text-4xl" />
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
