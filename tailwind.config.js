/** @type {import('tailwindcss').Config} */

const red = {
  '50': '#fef2f2',
  '100': '#fee2e2',
  '200': '#fecaca',
  '300': '#fca5a5',
  '400': '#f87171',
  '500': '#ef4444',
  '600': '#cc2323',
  '700': '#991717',
  '800': '#661212',
  '900': '#330c0c'
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red,
      },
    },
  },
  plugins: [],
};
