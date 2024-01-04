import { Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CTAButton from '../components/CTAButton'

export default function CTASection() {
  return (
    <>
      <Flex
        p={{ base: 8, lg: 16 }}
        gap={{ base: 2, lg: 4 }}
        direction={'column'}
        bgColor='brand.100'
      >
        <Heading
          as='h2'
          size={{ base: 'xl', lg: '2xl' }}
          textAlign={'center'}
          color='brand.600'
        >
          Get Involved and Make a Difference
        </Heading>
        <Divider borderColor='brand.100' />
        <Text textAlign={'center'} color='brand.600'>
          Education is a light, let&apos;s keep it shining bright. Support our
          cause through donations.
        </Text>
        <Divider borderColor='brand.100' />
        <Flex justify={'center'} align={'center'}>
          <CTAButton
            type='cta_donate'
            variant='solid'
            size='lg'
            colorScheme='brand'
          />
        </Flex>
      </Flex>
    </>
  )
}
