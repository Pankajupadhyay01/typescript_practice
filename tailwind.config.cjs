/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        midnight: "#121063",
      },
    },
  },
  plugins: [], 
 
}