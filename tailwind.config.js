/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.js',
    './src/*.js',
    './*.html',
  ],
  theme: {
    colors: {
      'my-green': '#96EB95',
      'my-purple': '#9780FF',
      'my-red': '#FF707C',
      'my-background': '#282C33',
      'my-box': 'rgba(var(--box-color), 0.06)',
      'my-input': 'rgba(var(--input-color), 0.1)',
      'my-yellow': '#FFE713',
    },
    extend: {
      height: {
        '48px': '48px',
      },
      width: {
        '170px': '170px',
        '200px': '200px',
      }
    },
  },
  plugins: [],
}

