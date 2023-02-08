const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-quicksand)", ...fontFamily.sans],
        serif: ["var(--font-dm-serif)", ...fontFamily.sans],
      },
      colors: {
        primary: "#dfddbf",
        secondary: "#84e388",
        tertiary: "#d53631",
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};
