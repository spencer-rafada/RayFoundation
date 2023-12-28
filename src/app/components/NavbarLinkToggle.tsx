'use client'
import { Box, Button } from '@chakra-ui/react'
import React, { RefObject } from 'react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

export default function NavbarLinkToggle({
  isOpen,
  toggle,
  btnRef,
}: {
  isOpen: boolean
  toggle: () => void
  btnRef: RefObject<HTMLButtonElement>
}) {
  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <Button onClick={toggle} ref={btnRef} variant='ghost' colorScheme='brand'>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Button>
    </Box>
  )
}
