/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      padding: "1.5rem",
      center: true,
    },
    fontFamily: {
      'display': ['Bebas Neue, sans-serif'],
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
        dark: '#03081D',
        primary: '#0D1743',
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
