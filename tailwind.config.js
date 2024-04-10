/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        flickering: 'flicker 3s linear infinite both',
      },
      keyframes: {
        flicker: {
          '0%': { opacity: 1 },
          '100%': { opacity: 1 },
          '41.99%': { opacity: 1 },
          '42%': { opacity: 0 },
          '43%': { opacity: 0 },
          '43.01%': { opacity: 1 },
          '45.99%': { opacity: 1 },
          '46%': { opacity: 0 },
          '46.9%': { opacity: 0 },
          '46.91%': { opacity: 1 },
          '51.99%': { opacity: 1 },
          '52%': { opacity: 0 },
          '52.8%': { opacity: 0 },
          '52.81%': { opacity: 1 },
        },
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        'IBM-sans': ['IBM Plex Sans'],
        'IBM-serif': ['IBM Plex Serif'],
        'IBM-mono': ['IBM Plex Mono'],
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
