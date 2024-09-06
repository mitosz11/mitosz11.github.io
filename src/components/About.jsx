import { useTranslation } from "react-i18next";
import Picture from "./Picture";
import SocialIcons from "./SocialIcons";

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
        <div className="flex flex-wrap lg:justify-start justify-center gap-4 py-6">
          <SocialIcons />
        </div>
      </div>
      <div className="w-full lg:w-3/5 mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <Picture />
      </div>
    </div>
  );
};

export default About;
