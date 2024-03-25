'use client'
import { Box, Flex, HStack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import NavbarLinkToggle from './NavbarLinkToggle'
import NavbarLinks from './NavbarLinks'
import Link from 'next/link'
import CTAButton from './CTAButton'

const links = [
  { to: '/about', text: 'About Us' },
  { to: '/projects', text: 'Our Projects' },
  { to: '/team', text: 'Team' },
]

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement | null>(null)

  return (
    <Flex
      alignItems='center'
      p={{ base: 4, md: 6 }}
      justifyContent='space-between'
      border='1px'
      borderColor='gray.200'
      bg='white'
      boxShadow='md'
    >
      {/* Logo */}
      <Box>
        <Link href='/'>
          <Text
            fontSize={{ base: '1rem', md: '1.5rem' }}
            fontWeight={700}
            textTransform='uppercase'
            color='brand.300'
          >
            Ray Foundation
          </Text>
        </Link>
      </Box>
      {/* Links */}
      <HStack>
        <CTAButton
          type='cta_donate'
          variant='solid'
          size='md'
          colorScheme='brand'
        />
        <NavbarLinks
          links={links}
          isOpen={isOpen}
          onClose={onClose}
          btnRef={btnRef}
        />
        {/* Toggle */}
        <NavbarLinkToggle isOpen={isOpen} toggle={onOpen} btnRef={btnRef} />
      </HStack>
    </Flex>
  )
}
