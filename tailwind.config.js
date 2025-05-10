/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0f252a",
        custom_black: "#444",
      },
    },
  },
  plugins: [],
};
