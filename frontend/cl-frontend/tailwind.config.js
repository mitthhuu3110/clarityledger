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
          lightBg: '#cee4e7',
          lightBase: '#ffffff',
          darkBg: '#1f1f1f', // Not pitch black
          darkBase: '#000000',
          orange: '#f26419',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
