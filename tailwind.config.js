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
      gray: colors.gray,
      black: colors.black,
      yellow: colors.yellow,
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
