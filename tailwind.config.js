/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        'width1': '85px',
        'width2': '650px',
        'width3': '400px',
        'width4':'590px',
        'width5':'302px',
        'width6':'150px',
      },
      height: {
        'height1': '64px',
        'height2': '400px',
        'height3': '459px',
        'height4':'150px',
      },
      fontSize: {
        'fontSize1': '18px',
        'fontSize2':'35px',
      },
      fontFamily: {
        Agbalumo: ['Agbalumo','cursive'],
        Beginner:['Edu TAS Beginner','cursive' ],
        Signika:['Signika Negative', 'cursive'],
        Acme:['Acme','cursive'],
        Archivo:['Archivo Narrow','cursive']
      },
      colors:{
        Ared: '#FF2400',
      },
      spacing: {
        'marginTop1': '75px',
        'bottom1':'100px',
      },
      borderRadius: {
        'rounded1': '50px',
        'rounded2':'50%'
      },
      // bg_colors:{
      //   Color1: '#1a1a1a',
      // },
    },
  },
  plugins: [],
}