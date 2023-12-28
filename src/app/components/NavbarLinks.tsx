'use client'
import React from 'react'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  StackDivider,
} from '@chakra-ui/react'
import NavbarLink from './NavbarLink'

export default function NavbarLinks({
  links,
  isOpen,
  onClose,
  btnRef,
}: {
  links: { to: string; text: string }[]
  isOpen: boolean
  onClose: () => void
  btnRef: React.RefObject<HTMLButtonElement>
}) {
  return (
    <>
      <Box display={{ base: 'none', md: 'block' }}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing='1.5rem'>
          {links.map((link) => {
            return <NavbarLink key={link.to} to={link.to} text={link.text} />
          })}
        </Stack>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack
              spacing='1.5rem'
              divider={<StackDivider borderColor='gray.200' />}
            >
              {links.map((link) => {
                return (
                  <NavbarLink key={link.to} to={link.to} text={link.text} />
                )
              })}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
