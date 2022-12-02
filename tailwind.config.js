/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  purge: ['./public/index.html'],
  theme: {
    extend: {},
    colors: {
      cyan: 'hsl(179, 62%, 43%)',
      brightYellow: 'hsl(71, 73%, 54%)',
      lightGray: 'hsl(204, 43%, 93%)',
      grayishBlue: 'hsl(218, 22%, 67%)',
      white: 'hsl(0, 100%, 100%)',
      noColor: 'hsla(0, 0%, 0%, 0)',
    },
    fontWeight: {
      400: '400',
      700: '700',
    },
  },
  plugins: [],
};
