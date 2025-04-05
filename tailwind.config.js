/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        interdisplay: ['InterDisplay', 'sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
