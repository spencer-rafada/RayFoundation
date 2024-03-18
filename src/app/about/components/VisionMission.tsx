import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function VisionMission() {
  return (
    <Flex
      bgColor='brand.500'
      p={{ base: 8, md: 16 }}
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: 8, md: 16 }}
      align='center'
    >
      <Flex
        direction='column'
        align='center'
        maxWidth={{ base: '100%', md: '50%' }}
        gap={{ base: 2, md: 4 }}
        data-testid='about-us-vision'
      >
        <Heading as='h3' size='xl' color='white'>
          Vision
        </Heading>
        <Text fontSize='lg' color='white' align='center'>
          Our vison is to break the cycle of poverty by addressing the root
          causes and providing sustainable solutions through education,
          healthcare, and clean water. By empowering these rural children and
          communities, we believe that we can create a brighter and more
          prosperous future for them, where they have the opportunity to pursue
          their dreams and overcome the challenges they face.
        </Text>
      </Flex>
      <Flex
        direction='column'
        align='center'
        grow='2'
        gap={{ base: 2, md: 4 }}
        data-testid='about-us-mission'
      >
        <Heading as='h3' size='xl' color='white'>
          Mission
        </Heading>
        <Text fontSize='lg' color='white' align='center'>
          To transform lives and break the cycle of poverty for children in
          rural communities in Sierra Leone through education.
        </Text>
      </Flex>
    </Flex>
  )
}
