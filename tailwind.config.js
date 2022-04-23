module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
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
      '5xl': '2.75rem',
      '6xl': '4rem',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#CCCCCC',
          400: '#BEBCBC',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#292C2D',
        },
        blue: {
          100: '#6597D3',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#0E5CBA',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#07274E',
        },
        'line-green': '#71B050',
        'line-yellow': '#FFCA25',
        'line-blue': '#012542',
        'main-color': '#0E5CBA',
        'dark-blue': '#07274E',
      },
      width: {
        'w-95': '95%',
      }
    },
    screens: {
      xs: '320px',
      sm: '768px',
      md: '992px',
      lg: '1170px',
      xl: '1360px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1920px',
      '5xl': '2560px',
    },

  },

  variants: {},
  plugins: [],
};
