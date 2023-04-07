module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#7d7ff2',
          200: '#5456bc',
          300: '#3739a3',
          400: '#2b2d84',
          500: '#212266',
          600: '#161743',
          700: '#14143d',
          800: '#0c0d26',
          900: '#05050f',
        },
        secondary: {
          100: '#f8fcde',
          200: '#ecf4b0',
          300: '#e1f263',
          400: '#e4f280',
          500: '#e4ff1a',
        },
        gray: {
          100: '#f7fafc',
          200: '#EBEBEB',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#C0C0C0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1B1B1B',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};
