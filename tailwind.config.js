/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [              
    './src/app/weather/*.{html,ts}',         
    './src/app/weather/weather-details/*.{html,ts}',  
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

