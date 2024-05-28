/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#EDEEB8",
        red: "#964F4C",
        brown: "#504237",
        black: "#000000",
        customBackground: "#FFFAEC",
      },
      fontFamily: {
        'inika': ['Inika', 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: [],
};
