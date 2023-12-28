/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'firstColor': '#FAD91E',
        'secondColor': '#FA551E',
        'thirdColor': '#231F20',
      },
    },
  },
  plugins: [],
}

