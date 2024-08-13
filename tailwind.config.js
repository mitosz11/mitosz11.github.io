/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        144: "36rem", 
        160: "40rem",
        192: "48rem",
      },
    },
  },
  plugins: [],
};
