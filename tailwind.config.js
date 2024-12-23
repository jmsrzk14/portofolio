import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(-10px, 15px)' },
          '50%': { transform: 'translate(-10px, 35px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
