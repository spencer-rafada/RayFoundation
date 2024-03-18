import { Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CTAButton from '../components/CTAButton'

export default function CTASection({
  heading,
  subheading,
}: {
  heading: string
  subheading?: string
}) {
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
          data-testid='cta-section-heading'
        >
          {heading}
        </Heading>
        <Divider borderColor='brand.100' />
        <Text
          textAlign={'center'}
          color='brand.600'
          data-testid='cta-section-subheading'
        >
          {subheading}
        </Text>
        <Divider borderColor='brand.100' />
        <Flex
          justify={'center'}
          align={'center'}
          data-testid='cta-section-button'
        >
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
