/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightgray': '#F0F4F4',
        'buttonColor': '#247b7b'        
      },
      
    },
  },
  plugins: [],
};

export default config;
