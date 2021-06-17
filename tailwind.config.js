module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'carbone': {
          '50': '#7D7D7D',
          '100': '#787878',
          '200': '#6E6E6E',
          '300': '#636363',
          '400': '#595959',
          '500': '#4F4F4F',
          '600': '#3D3D3D',
          '700': '#2B2B2B',
          '800': '#1A1A1A',
          '900': '#080808'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
