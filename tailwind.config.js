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
      animation: {
        blob: "blob 16s infinite",
        float: "float 6s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        },
        float: {
          "0%": {
            transform: "translatey(0px);"
          },
          "50%": {
            transform: "translatey(-20px);"
          },
          "100%": {
            transform: "translatey(0px);"
          }
        }
      }
    },
  },
  plugins: [],
};
