module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'indie-flower': ['Indie Flower', 'cursive'],
        'open-sans-condensed': ['Open Sans Condensed', 'sans-serif'],
        'yomogi': ['Yomogi', 'cursive']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
