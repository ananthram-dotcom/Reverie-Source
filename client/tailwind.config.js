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
          deep: '#4B2E6B',       // Primary Deep Purple
          accent: '#7B4FA0',     // Accent Purple
          light: '#9B68C4',      // Soft Purple Highlight
          cream: '#F5EDE1',      // Warm Cream / Vintage Felt Neutral
          ivory: '#FAF6F0',      // Card & Canvas Light Background
          brass: '#B8860B',      // Aged Brass / Gold Signage Accent
          gold: '#D4AF37',       // Metallic Gold Highlight
          walnut: '#3E2723',     // Rich Cue & Frame Walnut Wood
          darkwalnut: '#2C1A1D', // Dark Background Wood Shadow
          ink: '#1F1524',        // High contrast text black-purple
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brass-gradient': 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #8B6508 100%)',
        'purple-gradient': 'linear-gradient(135deg, #2C1A1D 0%, #4B2E6B 50%, #1F1524 100%)',
      },
      boxShadow: {
        'brass': '0 4px 20px -2px rgba(184, 134, 11, 0.25)',
        'purple': '0 10px 30px -5px rgba(75, 46, 107, 0.3)',
      }
    },
  },
  plugins: [],
}
