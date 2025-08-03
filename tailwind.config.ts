// tailwind.config.ts
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#efe2b2',
          DEFAULT: '#d2b552',
          dark: '#a48b33',
        },
        swu: {
          light: '#ee6a71',
          DEFAULT: '#b52027',
          dark: '#84161b',
        },
        dark: {
          DEFAULT: '#282624',
          light: '#463e39',
          pure: '#181714',
        },
        light: {
          DEFAULT: '#ffffff',
          dark: '#f6f5ef',
        },
      },
      fontFamily: {
        sans: ['Rubik', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['4.5rem', { lineHeight: '1' }],
        h1: ['3rem', { lineHeight: '1.15' }],
        h2: ['2rem', { lineHeight: '1.2' }],
        h3: ['1.25rem', { lineHeight: '1.25' }],
        h4: ['1.125rem', { lineHeight: '1.3' }],
        body: ['1rem', { lineHeight: '1.5' }],
        small: ['0.875rem', { lineHeight: '1.4' }],
      },
      fontWeight: {
        black: '900',
        bold: '700',
        medium: '500',
        normal: '400',
      },
    },
  },
  plugins: [],
};
