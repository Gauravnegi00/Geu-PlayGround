/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#FF970E',
      },
      boxShadow: {
        'custom-shadow': '0px 0px 20px -5px rgba(255, 151, 14, 0.7)',
      },
    },
  },
  plugins: [],
}