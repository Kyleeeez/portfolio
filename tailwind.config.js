const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'display': ['Montserrat'],
      'body': ['Outfit'],
    },
    cursor: {
      pointer: 'pointer',
      grab: 'grab',
      grabbing: 'grabbing',
    },

    extend: {
      colors: {
        slate: {
          DEFAULT: '#043A6C',
          '50': '#09BEDA',
          '100': '#09ACCE',
          '200': '#088AB5',
          '300': '#076C9D',
          '400': '#065184',
          '500': '#043A6C',
          '600': '#042B5D',
          '700': '#031E4E',
          '800': '#031440',
          '900': '#020C31'
        },
      }
    },
  },
  variants: {
  },
  plugins: []
}
