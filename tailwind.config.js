/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          lightest: '#f6e7f1',
          lighter: '#e5c8e5',
          light: '#b583c9',
          base: '#9358ac',
          dark: '#782986',
        },
      },
    },
  },
  plugins: [],
}