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
      backgroundImage: (theme) => ({
        'logo-dark': "url('./src/assets/images/LOGO-D~1.SVG')",
        'logo-light': "url('./src/assets/images/LOGO-L~1.SVG')",
        'curvy-dark': "url('./src/assets/images/BG-CUR~1.SVG')",
        'curvy-light': "url('./src/assets/images/BG-CUR~2.SVG')",
      }),
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
