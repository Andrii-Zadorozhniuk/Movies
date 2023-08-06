/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      '2xl': {'min': '1800px'} ,
      'xl': {'max': '1200px'} ,
      'lg': {'max': '991px'} ,
      'md': {'max': '767px'} ,
      'sm': {'max': '550px'} ,
      'xsm': {'max': '360px'} ,
    }
  },
  plugins: [],
}

