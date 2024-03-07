/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const themeConfig = require("./TailwindCustom/themeConfig.json");
const extendConfig = require("./TailwindCustom/extendConfig.json");
const colors = require("./TailwindCustom/colors.json");
const boxShadow = require("./TailwindCustom/boxShadow.json");
const { allShades } = require("./TailwindCustom/util");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: themeConfig,
  extend: extendConfig,
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(allShades(colors, "text", "color"));
      addUtilities(allShades(boxShadow, "", "box-shadow"));
    }),
  ],
};
