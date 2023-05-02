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

const gray = {
  50: "hsl(0deg, 0%, 95%)",
 100: "hsl(0deg, 0%, 85%)",
 200: "hsl(0deg, 0%, 75%)",
 300: "hsl(0deg, 0%, 65%)",
 400: "hsl(0deg, 0%, 55%)",
 500: "hsl(0deg, 0%, 45%)",
 600: "hsl(0deg, 0%, 35%)",
 700: "hsl(0deg, 0%, 25%)",
 800: "hsl(0deg, 0%, 15%)",
 900: "hsl(0deg, 0%, 5%)"
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red, gray,
      },
    },
  },
  plugins: [],
};
