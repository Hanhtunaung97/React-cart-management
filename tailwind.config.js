/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["Briem Hand", "cursive"],
      },
    },
  },
  plugins: [],
};
