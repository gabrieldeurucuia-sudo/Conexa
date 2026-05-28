/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#ec4899',
        dark: '#0f172a',
        light: '#f8fafc',
      },
      backgroundImage: {
        gradient: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
      }
    },
  },
  plugins: [],
}
