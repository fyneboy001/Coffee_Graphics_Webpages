/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ["Pacifico", "serif"],
        Marvel: ["Marvel", "serif"],
        Bebas: ["Bebas Neue", "serif"],
      },
    },
  },
  plugins: [],
};
