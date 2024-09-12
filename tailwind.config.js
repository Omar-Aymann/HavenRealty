/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}", "./index.html"],
  theme: {
    extend: {
      colors: {
        dark: '#0F1330',
        mainGreen: '#5597AB',
      },
    },
  },
  plugins: [],
}
