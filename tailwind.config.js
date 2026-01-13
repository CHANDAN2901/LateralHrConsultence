/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6e6e6',
          100: '#b1b1b1',
          200: '#8b8b8b',
          300: '#565656',
          400: '#353535',
          500: '#030303',
          600: '#030303',
          700: '#020202',
          800: '#020202',
          900: '#010101',
        },
      },
    },
  },
  plugins: [],
}
