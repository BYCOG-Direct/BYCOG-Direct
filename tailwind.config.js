/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        logoBlue: '#7078BF',
        logoGreen: '#81B29A',
        logoYellow: '#F2CC8F',
        logoRed: '#E07A5F',
        gray: '#3D3B3C',
        darkGray: '#323031',
        tan: '#D9D7D2',
        orange: '#e07a5f',
        lightOrange: '#f2cc8f',
        randPurp: '#8D4CB2'
      },
    },
  },
  plugins: [],
});

