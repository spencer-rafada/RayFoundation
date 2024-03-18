import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import FooterLinks from './FooterLinks'

export default function Footer() {
  return (
    <Flex
      gap={{ base: 6, md: 8 }}
      p={{ base: 8, md: 16 }}
      align='center'
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex direction={'column'} gap={{ base: 2, md: 4 }}>
        <Text
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight={'bold'}
          color='brand.700'
          align={{ base: 'center', md: 'start' }}
          data-testid='footer-logo'
        >
          Ray Foundation
        </Text>
        <Box data-testid='footer-social-links'>
          <FooterLinks />
        </Box>
      </Flex>
      <Flex justify='center' align='center' grow='1'>
        <Text align='center' fontWeight='bold' data-testid='footer-address'>
          3021 N 5000 E, Sugar City, ID 83448 | +1 (208) 607 6475
        </Text>
      </Flex>
    </Flex>
  )
}
