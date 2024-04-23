/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  mode: "jit",
  darkMode: "false",
  theme: {
    extend: {
      colors: {
        primary: "#EDEBE3",
        secondary: "#0D0D0D",
        tertiary: "#ba7c30",
        dark: "#20232d",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBrown: "d29952",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "320px",
      ss: "480px",
      sm: "620px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
  },
  plugins: [],
};
