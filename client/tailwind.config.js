

const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {fontFamily: {
      averia: ['Averia Serif Libre', 'serif'], 
      poppins: ['Poppins', 'sans-serif'],
      cabin: ['Cabin', 'sans-serif'],
      playfair: ['Playfair Display', 'serif'],


    },},
  },
  plugins: [
    flowbite.plugin(),
  ],
}