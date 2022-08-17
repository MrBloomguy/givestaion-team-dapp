/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Jura: ["Jura", "sans-serif"],
      },
    },
    colors: {
      White: "#fff",
      "Dark-Green": "#0F172A",
    },
  },
  plugins: [],
};
