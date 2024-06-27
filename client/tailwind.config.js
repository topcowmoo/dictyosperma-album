/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
          primary: '#635FC7',
          primaryHover: '#A8A4FF',
          primaryDark: '#635FC7',
          primaryDarkHover: '#A8A4FF',
          secondary: '#F4F7FD',
          secondaryHover: '#635FC740',
          secondaryDark: '#FFFFFF',
          secondaryDarkHover: '#FFFFFF',
          destructive: '#EA5555',
          destructiveHover: '#FF9898',
          destructiveDark: '#EA5555',
          destructiveDarkHover: '#FF9898',
          darkBackground: '#2B2C37',
          darkDropdown: '#20212C',
          linesLight: '#E4EBFA',
          linesDark: '#F4F7FD',
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};