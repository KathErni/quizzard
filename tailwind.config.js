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
          blue: '#180161',
          purple: '#4F1787',
          pink: '#EB3678',
          orange: '#FB773C',
          white: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}