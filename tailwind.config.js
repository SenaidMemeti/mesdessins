/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      scrollPadding: {
        '96': '24rem',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("flowbite/plugin")
  ],
}