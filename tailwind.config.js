/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(217,28%,15%)',
        darkBlue1: 'hsl(218,28%,13%)',
        darkBlue2: 'hsl(216,53%,9%)',
        darkBlue3: 'hsl(219,30%,18%)',
        accentCyan: 'hsl(176,68%,64%)',
        accentBlue: 'hsl(198,60%,50%)',
        lightRed: 'hsl(0,100%,63%)',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '1020px',
    xl: '1440px',
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}
