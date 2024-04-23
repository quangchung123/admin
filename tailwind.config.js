/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'customCol': '219px minmax(0, 1fr)',

      },
      colors:{
        'primary': '#1cb803',
        'second': '#FF0000'
      }
    },
  },
  plugins: [],
}

