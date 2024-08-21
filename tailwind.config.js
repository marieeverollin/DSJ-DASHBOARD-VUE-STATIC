/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    './src/**/*.vue',
    "./public/index.html",
    "./*.html",
    "./blocks/**/*.html",
  ],

  theme: {
    extend: { 
        colors: {
        'dsj-yellow' : '#FEC100',
        'dsj-yellow-15' : 'rgba(254, 193, 0, 0.15)',
        'dsj-grey1' : '#F1F3F6',
        'dsj-grey2' : '#E3E3E3',
        'dsj-grey3' : '#A0A0A0',
        'dsj-grey4' : '#545454',
        'dsj-black' : '#232528',
        'dsj-light-red' : '#F66C6C',
        'dsj-light-orange' : '#FFC175',
        'dsj-light-blue' : '#A8D4FF',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
    },
    flex: {
        '1': '1 1 0%',
        '2': '2 1 0%',
        '3': '3 1 0%',
        '4': '4 1 0%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

