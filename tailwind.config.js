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
        secondary: '#ff183f',
        light: '#ebedf5',
        darkCard: '#0b1023',
        borderLight: '#1B2033',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  variants: {},
  plugins: [],
};
