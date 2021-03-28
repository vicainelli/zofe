const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  darkMode: "class",
  theme: {
    colors: {
      zofe: "#d6b204",
      black: colors.black,
      blue: colors.blue,
      gray: colors.gray,
      red: colors.red,
      white: colors.white,
      yellow: colors.yellow,
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
