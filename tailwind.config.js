/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {},
    fontFamily:{
      Poppins: ["poppins","sans-serif"]
    },
    container:{
      center:true,
      padding:{
        DEFAULT:"1rem",
        md:"2rem"
      }
    }
  },
  plugins: [],
}