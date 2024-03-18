import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function OurStory() {
  return (
    <>
      <Flex
        direction='column'
        p={{ base: 8, md: 16 }}
        align='center'
        gap={{ base: 4, md: 6 }}
      >
        <Heading
          as='h3'
          size='xl'
          color='brand.500'
          data-testid='about-us-our-story-heading'
        >
          Our Story
        </Heading>
        <Flex
          direction='column'
          gap={{ base: 4, md: 5 }}
          data-testid='about-us-our-story-paragraphs'
        >
          <Text fontSize='lg'>
            Ray Foundation was created on the commitment to addressing urgent
            needs in education, clean water, and healthcare. Our foundation
            stands as a beacon of hope, especially for rural communities in
            Sierra Leone, West Africa, seeking to thrive against all odds.
          </Text>
          <Text fontSize='lg'>
            Central to our philosophy is the recognition that true
            transformation emerges when communities unite to tackle their own
            challenges. The Ray Foundation is the guiding light that fosters an
            environment conducive to community-driven solutions. In a symbiotic
            partnership with donors, supporters, government bodies,
            stakeholders, and local leaders, we channel resources toward
            communities in need, igniting a chain reaction of positive change.
          </Text>
          <Text fontSize='lg'>
            Our deep collaboration with local government and local leaders
            underscores our dedication to sustainability and real impact.
          </Text>
          <Text fontSize='lg'>
            Every project is meticulously planned to align with the genuine
            needs of the communities. This approach ensures not only immediate
            benefits, but also long-term viability. This demonstrates our belief
            that communities are best suited to uplift themselves.
          </Text>
          <Text fontSize='lg'>
            Our aspiration is to deliver the gift of education, empowering
            families with the tools to combat poverty and champion grassroots
            solutions. By fostering sustainable projects owned by the citizens
            of Sierra Leone, we create a legacy that benefits both present and
            future generations.
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
