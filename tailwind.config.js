/** @type {import('tailwindcss').Config} */
const { Colors, Fonts } = require("./src/constants/theming");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: Colors,
      fontFamily: Fonts,
      backgroundImage: {
        triangleShaped: "url('/src/assets/images/triangleShapedBg.png')",
        bodyBackground: "url('/src/assets/images/bodyBackground.png')",
      },
    },
  },
  plugins: [],
};
