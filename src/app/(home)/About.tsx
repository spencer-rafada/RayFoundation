import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import heroImage from '../../../public/hero.webp'

export default function About() {
  return (
    <>
      <Box>
        <Grid
          h='100%'
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
          gap={12}
          p={{ base: 8, md: 16 }}
        >
          <GridItem w='100%' h='100%' data-testid='about-image'>
            <Image src={heroImage} alt='About Us' />
          </GridItem>
          <GridItem w='100%' h='100%'>
            <Flex
              direction='column'
              gap={6}
              alignItems={{ base: 'center', lg: 'start' }}
              justifyContent='center'
              h='100%'
            >
              <Flex
                direction='column'
                alignItems={{ base: 'center', lg: 'start' }}
              >
                <Text as='b' fontSize={{ base: 'md', lg: 'xl' }}>
                  About Us
                </Text>
                <Heading
                  as='h2'
                  size={{ base: 'lg', lg: '2xl' }}
                  textAlign={{ base: 'center', lg: 'left' }}
                >
                  Empowering communities through education, clean water, and
                  healthcare initiatives.
                </Heading>
              </Flex>
              <Text textAlign={{ base: 'center', lg: 'left' }}>
                We are a non-profit organization dedicated to providing quality
                education to underprivileged children.
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}
