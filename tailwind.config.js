/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif', // Adds a new `font-display` class
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
