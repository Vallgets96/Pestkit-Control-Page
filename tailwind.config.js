/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
     scale: {
        '0': '0',
        '2': '.001',
        '50': '.5',
        '75': '.75',
        '85': '.94',


      }
  },
  plugins: [],
}
