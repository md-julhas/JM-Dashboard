/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        lightPrimary: "#FFFFFF ",
        lightSecondary: "#EEF1F9",
        darkPrimary: "#060A17",
        darkSecondary: "#091126",
        darkThird: "#121A2F",
        darkText: "#abb2bf",
        darkBorder: "#21283A",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1700px",
    },
  },
  plugins: [],
}
