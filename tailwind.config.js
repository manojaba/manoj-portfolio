/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibarra: ['"Ibarra Real Nova"', 'serif'],
        publicSans: ['"Public Sans"', 'sans-serif'],
      },
      spacing: {
        '50ch': '50ch',
      },
    },
  },
  plugins: [],
}

