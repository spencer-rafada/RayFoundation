'use client'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import theme from './theme'
import '@fontsource/roboto-slab'
import '@fontsource/monda'

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
