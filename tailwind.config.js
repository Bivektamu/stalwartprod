const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondBlack': '#2e2e2e',
        'black':'#333',
        'secondWhite': '#eee',
        'grey': '#f0f0f0',
        'aeroBlue': '#d7f7e3',
        'overlay': 'rgba(0,0,0,0.3)',
      },
      gridTemplateColumns: {
        '1fr': '1fr',
      },
      animation: {
        'fadeInUp':'fade 0.6s ease-in'
      },
      keyframes: {
        fade: {
          '0%': {transform: 'translateY(100px)'},
          '100%': {transform: 'translateY(0)'},
        }
      }
   
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.8xl'), color: '#fff', fontWeight: '400' },
        'h2': { fontSize: theme('fontSize.4xl'), fontWeight: '500' },
        'h3': { fontSize: theme('fontSize.xl'), fontWeight: '600' },
        'h4': { fontSize: theme('fontSize.xl'), fontWeight: '400' },
      })
    })
  ],
}

