/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        brand: {
          lightBg: '#EDEADE',
          lightBase: '#000000',
          darkBg: '#1e1e1e',
          darkBase: '#ffffff',
          orange: '#f97316',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};