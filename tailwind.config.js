/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          500: "#f59e0b",
          600: "#E87C18",
          700: "#c4610f",
        },
        accent: {
          100: "#d8ead8",
          500: "#2f7a30",
          600: "#124C13",
          700: "#0d380f",
        },
      },
    },
  },
  plugins: [],
};
