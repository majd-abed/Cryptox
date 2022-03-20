module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        sansita: ['Sansita', 'sans-serif'],
        Kaushan:['Kaushan Script','sans-serif'],
        Cairo:['Cairo', 'sans-serif'],
        Righteous:['Righteous', 'sans-serif']
      },
      screens: {
        '2xlx': {'max': '1535px'},
        'xlx': {'max': '1279px'},
        'lgx': {'max': '1023px'},
        'mdx': {'max': '767px'},
        'smx': {'max': '639px'},
      },
    }
  },
  plugins: [],
}

//Righteous:['Righteous', 'cursive']