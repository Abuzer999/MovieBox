/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      stroke: {
        'orange': 'rgb(255, 173, 73)'
      },
      fontSize: {
        'movie': 'clamp(1.25rem, 0.951rem + 1.5vw, 2.25rem)',
        'link': 'clamp(0.938rem, 0.881rem + 0.28vw, 1.125rem)',
        'links': 'clamp(0.938rem, 0.531rem + 1vw, 1.125rem)',
        'name': 'clamp(2.188rem, 1.711rem + 2.38vw, 3.125rem)',
        'info': 'clamp(0.875rem, 0.748rem + 0.63vw, 1.125rem)',
        'teg': 'clamp(1.125rem, 0.998rem + 0.63vw, 1.375rem)',
        'similar': 'clamp(1.25rem, 0.876rem + 1.87vw, 2.5rem)'
      },
      gap: {
        'text': 'clamp(0.5rem, 0.35rem + 0.75vw, 1rem)',
        'links': 'clamp(1.25rem, -2.798rem + 6.82vw, 3.125rem)',
        'movie': 'clamp(1.875rem, 1.501rem + 1.87vw, 3.125rem)',
      },
      maxWidth: {
        'search': 'clamp(15.313rem, 6.424rem + 44.44vw, 32.813rem)'
      },
      screens: {
        'sl': { 'max': '1390px' },
        'sg': { 'max': '1200px' },
        'sb': { 'max': '950px' },
        'ss': { 'max': '650px' },
        'h-700': { raw: '(width > 650px) and (height < 700px)' },
        'h-600': { raw: '(width < 650px) and (height < 550px)' }

      },
      margin: {
        'detail': 'clamp(2.5rem, 1.379rem + 5.61vw, 6.25rem)',
        'detail2': 'clamp(3.125rem, 1.256rem + 9.35vw, 9.375rem)',
        'similarM': 'clamp(1.25rem, 0.689rem + 2.8vw, 3.125rem)',
        'main': 'clamp(2.5rem, 1.939rem + 2.8vw, 4.375rem)'
      },
    },
  },
  plugins: [],
}