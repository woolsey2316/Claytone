/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        100: '100',
      },
      skew: {
        45: '45deg',
        '-45': '-45deg',
      },
      spacing: {
        '1/10': '10%',
        '7xl': '1380px',
        '6xl': '1170px',
        '5xl': '970px',
        '4xl': '750px',
        '13/30': '43.33%',
        15: '3.75rem',
        18: '4.5rem',
        108: '27rem',
        120: '30rem',
        132: '33rem',
        144: '36rem',
        156: '39rem',
        168: '42rem',
        180: '45rem',
        body: 'calc(100% - 21rem)',
      },
      fontFamily: {
        primary: ['Jost', ...fontFamily.sans],
        greatVibes: ['GreatVibes', ...fontFamily.sans],
        alexandria: ['Alexandria', ...fontFamily.sans],
        quicksand: ['Quicksand', ...fontFamily.sans],
        jost: ['Jost', ...fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        dark: '#222222',
        coral: '#ca6e57',
        'light-grey': '#777777',
        grey: '#c5c5c5',
        'lighter-grey': '#e5e5e5',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      textColor: [
        'responsive',
        'hover',
        'focus',
        'before',
        'after',
        'hover::before',
        'hover::after',
        'focus::before',
        'checked:hover',
        'checked:hover::before',
      ],
      transitionProperty: ['responsive', 'hover', 'focus', 'group-hover'],
      transform: ['responsive', 'group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-pseudo-elements')({
      customPseudoClasses: ['foo'],
      customPseudoElements: ['bar'],
      contentUtilities: false,
      emptyContent: true,
    }),
  ],
};
