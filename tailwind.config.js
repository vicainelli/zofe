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
      discord: '#7289DA',
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
