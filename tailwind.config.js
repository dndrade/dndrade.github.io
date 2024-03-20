/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'blue': '#7dcfff',
        'purple': '#9d7cd8',
        'pink': '#ff007c ',
        'orange': '#ff9e64',
        'green': '#c3e88d',
        'yellow': '#ffc777',
        'gray-dark': '#414868',
        'gray': '#292e42',
        'gray-light': '#545c7e',
      },
    },
  },
  plugins: [],
}

