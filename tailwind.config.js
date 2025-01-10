/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mn: "420px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
