const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        onyx: '#393D3F',
        cream: '#FDFDFF',
        silver: '#C6C5B9',
        teal: '#62929E',
        darkblue: '#546A7B',
        tred: colors.rose,
        'tred-75': '#FEEAEA',
        tgray: colors.warmGray,
        tbrown: colors.amber,
        tgreen: colors.emerald
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
