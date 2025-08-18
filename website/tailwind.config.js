/** @type {import('tailwindcss').Config} */

import { content, theme } from '@luminescent/ui-qwik/config';

const gray = {
  50: "hsl(270deg, 2%, 95%)",
 100: "hsl(270deg, 4%, 85%)",
 200: "hsl(270deg, 6%, 75%)",
 300: "hsl(270deg, 8%, 65%)",
 400: "hsl(270deg, 10%, 55%)",
 500: "hsl(270deg, 12%, 45%)",
 600: "hsl(270deg, 14%, 32%)",
 700: "hsl(270deg, 16%, 21%)",
 800: "hsl(270deg, 18%, 12%)",
 850: "hsl(270deg, 20%, 8%)",
 900: "hsl(270deg, 22%, 5%)",
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', ...content],
  theme: {
    extend: {
      colors: {
        gray,
        ...theme.extend.colors,
      },
      animation: {
        ...theme.extend.animation,
      },
      keyframes: {
        ...theme.extend.keyframes,
      },
    },
  },
  plugins: [
    require('@luminescent/ui'),
    require('@anuragroy/tailwindcss-animate'),
  ],
};
