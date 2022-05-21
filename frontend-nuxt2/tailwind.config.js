module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        primary: {
          light: '#EAFFE2',
          DEFAULT: '#54BF29',
        },
        secondary: {
          light: '#B4B4B4',
          DEFAULT: '#333333',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
}
