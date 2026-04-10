/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00aaff',
        accent: '#00e5c8',
        dark: {
          900: '#0a0a0f',
          800: '#0d0d14',
          700: '#12121c',
          600: '#1a1a2e',
        },
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
