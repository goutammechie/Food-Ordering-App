/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

const defaultTheme  =require('tailwindcss/defaultConfig');
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['ClashDisplay-Regular']
      },
      colors:{
        tomato: '#E50914',
        marigold: '#ffbe04'
      }
    },
  },
  plugins: [],
}
