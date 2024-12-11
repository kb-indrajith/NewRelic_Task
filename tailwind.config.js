const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    colors: {
      charcoal: '#2C2C2C',
      teal: '#0AB0BF',
      blue: '#0069CE',
      darkTeal: '#00838F',
      orange: '#FF8853',
    },
    fontFamily: {
      sans: ['Open Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
    },    
    fontSize: {
      h1: ['40px', { lineHeight: '48px', fontWeight: '400' }],
      h2: ['32px', { lineHeight: '48px', fontWeight: '400' }],
      h3: ['24px', { lineHeight: '32px', fontWeight: '600' }],
      h4: ['20px', { lineHeight: '28px', fontWeight: '600' }],
      body: ['16px', { lineHeight: '28px', fontWeight: '400' }],
      link: ['16px', { lineHeight: '28px', fontWeight: '600' }],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
