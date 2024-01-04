import React from 'react'
import Image from 'next/image'
import heroImage from '../../../public/hero.webp'
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import CTAButton from '../components/CTAButton'

export default function HeroHeader() {
  return (
    <>
      <Box p={{ base: 0, md: 16 }}>
        <Grid
          h='100%'
          templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2, 1fr)' }}
          gap={6}
        >
          <GridItem w='100%' h='100%' p={{ base: 8, md: 0 }}>
            <VStack spacing={6} alignItems={{ base: 'center', lg: 'start' }}>
              <Heading
                as='h1'
                size={{ base: '2xl', lg: '3xl' }}
                noOfLines={{ base: 3, lg: 2 }}
                textAlign={{ base: 'center', lg: 'left' }}
              >
                Transforming Lives Through Service
              </Heading>
              <Text textAlign={{ base: 'center', lg: 'left' }}>
                Join us in making a difference and empowering the next
                generation. Education is a light, let&apos;s keep it shining
                bright.
              </Text>
              <Divider borderColor='white' />
              <CTAButton
                type='cta_donate'
                variant='solid'
                size='lg'
                colorScheme='brand'
              />
            </VStack>
          </GridItem>
          <GridItem w='100%' h='100%'>
            <Image src={heroImage} alt='Hero Header Image' />
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}
