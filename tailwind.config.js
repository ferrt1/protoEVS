/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00759c',
        'secondary': '#004f69',
        'semiBlack': '#011627',
        'lightBlue': '#7dd3fc',
        'semiBlackOpacity': '#011627',
      },
      backgroundImage: {
        'hero-image': "url('./src/assets/imgs/heroImageBlue.jpg')",
        'title': "url('./src/assets/imgs/title.jpg')"
      }
    },
  },
}

