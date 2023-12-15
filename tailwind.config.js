/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'main': ['Afacad', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'profile': "url('./ui/profile.JPG')",
      }
    },
  },
  plugins: [],
}

