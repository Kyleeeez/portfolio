/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      padding: '1.5rem',
      center: true,
    },
    fontFamily: {
      display: ['DM Sans, sans-serif'],
      sans: ['Inter, sans-serif'],
    },
    cursor: {
      pointer: 'pointer',
      grab: 'grab',
      grabbing: 'grabbing',
    },
    extend: {
      colors: {
        dark: '#03081D',
        primary: '#0D1743',
        secondary: '#f63455',
        light: '#ebedf5',
        darkCard: '#0b1023',
        borderLight: '#1B2033',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        blob: 'blob 14s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },
          '33%': {
            transform: 'translate(30px, -50px)',
          },
          '66%': {
            transform: 'translate(-20px, 20px)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px)',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
