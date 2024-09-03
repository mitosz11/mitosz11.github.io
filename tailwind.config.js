/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyan-400": "#4fd1c5",
        "cyan-500": "#38b2ac",
        "cyan-700": "#2c7a7b",
        "gray-300": "#e2e8f0",
        "gray-700": "#2d3748", // Add dark mode gray
        "gray-900": "#1a202c", // Add very dark gray for dark mode
      },
      fontSize: {
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
      },
      spacing: {
        28: "7rem",
        48: "12rem",
        60: "15rem",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
      },
      height: {
        144: "36rem",
        160: "40rem",
        192: "48rem",
        0: "0%",
        10: "10%",
        20: "20%",
        30: "30%",
        40: "40%",
        50: "50%",
        60: "60%",
        70: "70%",
        80: "80%",
        90: "90%",
        100: "100%",
      },
      width: {
        144: "36rem",
        160: "40rem",
        192: "48rem",
        0: "0%",
        10: "10%",
        20: "20%",
        30: "30%",
        40: "40%",
        50: "50%",
        60: "60%",
        70: "70%",
        80: "80%",
        90: "90%",
        100: "100%",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
