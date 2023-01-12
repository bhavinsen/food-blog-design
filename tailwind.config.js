/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark600: "#2B2B2B",
      },
      boxShadow: {
        header: "0px 1px 7px 1px rgba(0, 0, 0, 0.1)",
        bordershadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
