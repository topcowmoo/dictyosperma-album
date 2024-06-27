/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px", // Ensure '1' is defined for 1px border width
      },
      colors: {
        primary: "#635FC7",
        // Add dark mode colors
        darkPrimary: "#4A4E69",
        darkBackground: "#22223B",
        darkText: "#F2E9E4",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
