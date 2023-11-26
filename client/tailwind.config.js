/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{html,js,jsx}", "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],

  theme: {
    extend: {
      fontFamily: {
        satoshi: ['futura-pt', 'sans-serif'],
        inter: ['futura-pt-bold', 'sans-serif'],
        'futura-pt': ['futura-pt', 'sans-serif'],
        // If Futura PT Bold is considered a separate family, add it like so:
        'futura-pt-bold': ['futura-pt-bold', 'sans-serif'],
        sans: ['futura-pt', 'sans-serif'], // This sets Futura PT as the default font

      }
    },
  },
  plugins: [],
}
