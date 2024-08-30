const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-900 p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 py-8">
        Contact Me
      </h1>
      <form
        action="https://getform.io/f/your-form-endpoint"
        method="POST"
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          className="p-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="p-4 rounded bg-cyan-600 text-white hover:bg-cyan-700 focus:outline-none"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
