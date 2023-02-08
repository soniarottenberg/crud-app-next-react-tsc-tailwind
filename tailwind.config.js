/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./commons/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "eastern-spice": "#dba97c",
      black: "#000000",
      white: "#ffffff",
      grey: "#7F85A2",
      green: "#52D8B0",
      "light-grey": "#f7f7f7",
      "mid-grey": "#8F92A133",
      "heavy-grey": "#9FA3B9",
      "deep-blue": "#3E6BEC",
    },
    borderRadius: {
      DEFAULT: "12px",
      full: "50%",
      small: "4px",
    },
    fontSize: {
      sm: "0.75rem",
      medium: "0.875rem",
      base: "1rem",
      xl: "1.125rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },

    extend: {},
  },
  plugins: [],
};
