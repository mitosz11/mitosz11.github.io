import React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialLinkedin,
} from "react-icons/sl";

const Contact = () => {
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
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.");
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
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-4 rounded dark:bg-gray-900 bg-gray-300 dark:text-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-4 rounded dark:bg-gray-900 bg-gray-300 dark:text-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="p-4 rounded dark:bg-gray-900 bg-gray-300 dark:text-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          ></textarea>
          <button
            type="submit"
            className="p-4 rounded text-white hover:text-cyan-700 bg-cyan-700 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Send Message
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-400 mb-2">Or reach out via:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;