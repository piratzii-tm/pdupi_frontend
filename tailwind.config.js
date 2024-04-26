/** @type {import('tailwindcss').Config} */
const { Colors, Fonts } = require("./src/constants/theming");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: Colors,
      fontFamily: Fonts,
    },
  },
  plugins: [require("flowbite/plugin")],
};
