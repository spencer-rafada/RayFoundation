'use client'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import NavbarLinkToggle from './NavbarLinkToggle'
import NavbarLink from './NavbarLink'

const links = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About Us' },
  { to: '/contact', text: 'Contact' },
  { to: '/projects', text: 'Our Projects' },
  { to: '/team', text: 'Team' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => setIsOpen((prevState: Boolean) => !prevState)

  return (
    <Flex>
      {/* Logo */}
      <Box>
        <Text>Ray Foundation</Text>
      </Box>
      {/* Links */}
      <Stack direction={{ base: 'column', md: 'row' }}>
        {links.map((link) => {
          return <NavbarLink key={link.to} to={link.to} text={link.text} />
        })}
      </Stack>
      {/* Toggle */}
      <NavbarLinkToggle isOpen={isOpen} toggle={toggle} />
    </Flex>
  )
}
