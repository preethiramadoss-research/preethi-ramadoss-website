module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx,css}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b1220',
        accent: '#0fa8a3',
        gold: '#b8873e',
        'gold-500': '#b8873e',
        slate: {
          900: '#0b1220'
        }
      }
    }
  },
  plugins: []
}
