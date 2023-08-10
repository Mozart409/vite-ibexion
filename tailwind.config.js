/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['prose'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#ffee00',
        orange: {
          100: '#ffaa28',
          200: '#ffa01e',
          300: '#ff9614',
          400: '#FF8C0A',
          500: '#FF8200'
        },
        'lava-black': {
          100: '#E6E6E6',
          200: '#CECECE',
          300: '#B5B5B5',
          400: '#9B9B9B',
          500: '#828282',
          600: '#686868',
          700: '#505050',
          800: '#373737',
          900: '#040204'
        },
        'canary-blue': {
          100: '#429de3',
          200: '#3893d9',
          300: '#2e89cf',
          400: '#247fc5',
          500: '#1A75BB'
        },
        'lava-orange': {
          100: '#ffaa28',
          200: '#ffa01e',
          300: '#ff9614',
          400: '#FF8C0A',
          500: '#FF8200'
        },
        'rubber-gray': '#161A1E',
        'colfo-gray': '#272F38',
        'gecko-gray': '#50545E',
        'meta-blue': '#449FDB'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '85ch',
            color: theme('colors.canary-blue.300'),
            fontSize: theme('fontSize.paragraph'),
            fontWeight: theme('fontWeight.paragraph'),
            strong: {
              color: theme('colors.canary-blue.200')
            },
            a: {
              color: theme('colors.canary-blue.100'),
              fontSize: theme('fontSize.paragraph'),
              fontWeight: theme('fontWeight.paragraph'),
              '&:hover': {
                color: theme('colors.canary-blue.300')
              }
            },
            h1: {
              color: theme('colors.canary-blue.100'),
              fontSize: theme('fontSize.h1'),
              fontWeight: theme('fontWeight.h1')
            },
            h2: {
              color: theme('colors.canary-blue.100'),
              fontSize: theme('fontSize.h2'),
              fontWeight: theme('fontWeight.h2')
            },
            h3: {
              color: theme('colors.canary-blue.200'),
              fontSize: theme('fontSize.h3'),
              fontWeight: theme('fontWeight.h3')
            },
            h4: {
              color: theme('colors.canary-blue.300'),
              fontSize: theme('fontSize.h4'),
              fontWeight: theme('fontWeight.h4')
            },
            h5: {
              color: theme('colors.canary-blue.300'),
              fontSize: theme('fontSize.h4'),
              fontWeight: theme('fontWeight.h4')
            },
            h6: {
              color: theme('colors.canary-blue.300'),
              fontSize: theme('fontSize.h4'),
              fontWeight: theme('fontWeight.h4')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries')
  ]
}
