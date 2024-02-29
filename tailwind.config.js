/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "comic": ["Comic Neue", "cursive"],
      "montserrat": ["Montserrat", "sans-serif"],
      "condensed": ["Sofia Sans Extra Condensed", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}