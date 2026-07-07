/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
        },
        copper: {
          dark: '#5C3A1A',
          DEFAULT: '#8B5E2B',
          light: '#B87333',
          glow: '#E8B884',
        },
        gold: {
          DEFAULT: '#F4D03F',
        },
        slate: {
          DEFAULT: '#64748B',
          dark: '#4B5563',
        },
        background: {
          primary: '#FFFFFF',
          tint1: '#FDF8F3',
          tint2: '#F5E1C4',
        }
      },
      fontFamily: {
        sans: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'elevated': '0px 20px 40px -12px rgba(0,0,0,0.8)',
      }
    },
  },
  plugins: [],
}
