import React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import SocialIcons from "./SocialIcons";

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fhi0zrf",
        "template_27y6s27",
        e.target,
        "nE2CsmvIh6AhXP9tN"
      )
      .then(
        (result) => {
          toast.success(t("success_message"));
        },
        (error) => {
          toast.error(t("error_message"));
          console.error("EmailJS Error:", error);
        }
      );

    e.target.reset();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/contact-background.jpg')] bg-cover bg-center opacity-30"></div>
      <div className="relative z-10 p-8 dark:bg-gray-800 bg-gray-100 bg-opacity-80 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl md:text-5xl font-bold dark:text-cyan-300 text-cyan-700 py-4 text-center">
          {t("contact_title")}
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder={t("name_placeholder")}
            className="p-4 rounded dark:bg-gray-900 bg-gray-300 dark:text-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("email_placeholder")}
            className="p-4 rounded dark:bg-gray-900 bg-gray-300 dark:text-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder={t("message_placeholder")}
            className="p-4 rounded dark:bg-gray-900 bg-gray-300 dark:text-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          ></textarea>
          <button
            type="submit"
            className="p-4 rounded text-white hover:text-cyan-700 bg-cyan-700 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {t("send_button")}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-400 mb-2">{t("reach_out_text")}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <SocialIcons/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
