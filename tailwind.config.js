import { Lexend } from 'next/font/google'

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
        logoBlue: '#5E6EFF',
        logoGreen: '#56BD8B',
        logoYellow: '#FFBB55',
        logoRed: '#FE6C46',
        gray: '#3D3B3C',
        darkGray: '#323031',
        lightBlack: '#212121',
        mediumBlack: '#121212',
        tan: '#D9D7D2',
        hwite: '#F5F4F2',
        orange: '#e07a5f',
        lightOrange: '#f2cc8f',
        randPurp: '#8D4CB2'
      },
    },
    fontSize: {
      zero: '0px',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '10rem',
    },
    fontFamily: {
      sans: [Lexend], 
    },
  },
  plugins: [],
});

