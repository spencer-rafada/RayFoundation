import { extendTheme } from '@chakra-ui/react'

const overrides = {
  colors: {
    brand: {
      50: '#dafaff',
      100: '#adecff',
      200: '#7dddff',
      300: '#4dcffe',
      400: '#26c2fd',
      500: '#14a8e3',
      600: '#0183b2',
      700: '#005d80',
      800: '#00394f',
      900: '#00151e',
    },
  },
  fonts: {
    heading: 'Monda, sans-serif',
    body: 'Roboto Slab, serif',
  },
}

export default extendTheme(overrides)
