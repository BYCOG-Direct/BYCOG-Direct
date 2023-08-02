/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: '#3D3B3C',
        darkGray: '#323031',
        tan: '#D9D7D2',
        orange: '#e07a5f',
        lightOrange: '#f2cc8f'
      },
    },
  },
  plugins: [],
}

