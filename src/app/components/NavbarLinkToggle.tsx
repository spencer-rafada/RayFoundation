'use client'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

export default function NavbarLinkToggle({
  isOpen,
  toggle,
}: {
  isOpen: boolean
  toggle: () => void
}) {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  )
}
