/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: [
        "Inter, sans-serif",
      ],
    },
    cursor: {
      pointer: 'pointer',
      grab: 'grab',
      grabbing: 'grabbing',
    },
    extend: {
      colors: {
        primary: '#03081D',
        secondary: '#F43F5E',
        light: '#F3F6FF',
        darkCard: '#1B2033',
      }
    },
  },
  variants: {
  },
  plugins: []
}
