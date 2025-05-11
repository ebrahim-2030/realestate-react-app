/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#0f252a",
        "brand-secandary": "#ffb606",
        custom_black: "#444",
      },
    },
  },
  plugins: [],
};
