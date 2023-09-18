/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5a833",
        nav: "#015C97",
        secondary: "#343895",
        success: "#5bc25f",
        "dark-hover": "#253986",
        "secondary-hover": "0a4c88",
      },
    },
  },
  plugins: [],
};
