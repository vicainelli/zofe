const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",

  theme: {
    colors: {
      zofe: "#d6b204",
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
