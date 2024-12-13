/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
         'background-dark': '#442B6F',
         'background-light': '#753A8A',
         'background-light-green': '#D4EDCE'
      },
      boxShadow: {
        custom: '0px 10px 30px 0px #D9D9D9',
        counsel: '0px 5px 12px 0px #7A7A7A3B',
        bocs: '0px 4.94px 4.94px 0px #7A7A7A80',

      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(180deg, #71278B 0%, #442B6F 100%)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}