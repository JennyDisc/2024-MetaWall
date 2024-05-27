/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.vue',
    // './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    // './utils/**/*.{js,ts}',
    './{App,app}.{js,ts,vue}',
    // './{Error,error}.{js,ts,vue}',
    // './app.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'gray1': '#EFECE7',
        'gray2': '#00040029',
        'gray3': '#707070',
        'gray4': '#9B9893',
        'black1': '#000400',
        'blue1': '#03438D',
        'red1': '#F57375'
      }
    },
  },
  plugins: [],
}

