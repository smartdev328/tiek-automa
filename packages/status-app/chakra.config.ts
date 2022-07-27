import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  breakpoints: {
    md: '800px',
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  fontSizes: {
    xs: '0.75rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '2rem',
  },
  shadows: {
    outline: 'none',
  },
  colors: {
    lightgray: {
      100: '#f1f2f8',
    },
    darkgray: {
      100: '#25292f',
    },
    gray: {
      200: '#dbdbdb',
      300: '#6b6e73',
    },
    darkblue: {
      100: '#1750E3',
      200: '#16166A',
    },
    blue: {
      200: '#3120F0',
      300: '#451AD8',
      400: '#0C38D8',
    },
    royalblue: {
      100: '#4972E1',
      200: '#8D77F6',
    },
    lightblue: {
      100: '#68CCDF',
      200: '#10B2D7',
    },
    cyan: {
      400: '#16D8B5',
      500: '#16D8B5',
    },
    green: {
      200: '#6FCF97',
    },
    red: {
      200: '#EB5757',
    },
    gold: {
      200: '#F2994A',
    },
  },
})
