/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '64px',
    },
    extend: {
      colors:{
        primary : "#34d399" ,// Emerald colour
        secondary: "#94a3b8" // text-slate-400
      }
    },
  },
  plugins: [],
}
