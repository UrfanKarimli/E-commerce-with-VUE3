/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    fontFamily: {
      'poppins':["Poppins", 'sans-serif',],
      'inter': [  "Inter", 'sans-serif',]
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1200px",
        'xl': '1000px'
      },
    },
    
    extend: {
    
    },
  },
  plugins: [],
}

