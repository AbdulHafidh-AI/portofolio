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
        primary : "#10b981" ,// Emerald colour
        secondary: "#94a3b8" // text-slate-400
      }
    },
  },
  plugins: [],
}
