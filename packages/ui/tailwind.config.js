/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "pyconug-yellow": "#F1DB2F",
        "pyconug-lightBlue": "#177E89",
        "pyconug-darkBlue": "#094C61",
        "pyconug-red": "#E32E26",
        "muted-foreground": "#6E6E77",
        muted: "#F4F4F5",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
