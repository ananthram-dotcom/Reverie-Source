/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reverie: {
          deep: '#3A1E4F',       // Understated Deep Purple
          accent: '#5E357C',     // Soft Heritage Purple
          felt: '#1E4337',       // Billiards Felt Green (Complementary Accent)
          feltlight: '#2D5A4C',  // Soft Felt Green Highlight
          cream: '#F4EFE6',      // Warm Off-White / Parchment
          ivory: '#FAF6F0',      // Soft Ivory
          brass: '#C5A059',      // Muted Aged Brass
          gold: '#D4B36A',       // Soft Antique Gold
          walnut: '#2E1E1B',     // Mahogany Wood
          darkwalnut: '#18121E', // Sleek Vintage Dark Canvas
          card: '#221929',       // Minimalist Dark Card Surface
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
