/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'customCol': '259px minmax(0, 1fr)',

      },
      colors:{
        'primary': '#1cb803',
        'second': '#FF0000',
        'accent': '#e9ecef',
        'icon': '#adb5bd',
      }
    },
  },
  plugins: [],
}

