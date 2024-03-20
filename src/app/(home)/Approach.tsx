import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import React from 'react'
import ApproachItem from './ApproachItem'

export default function Approach() {
  // Approaches
  // 1. Community Centered Approach
  // 2. Needs Assessment and Dialogue
  // 3. Inclusive Planning
  // 4. Education Advocacy
  // 5. Legal Workforce Engagement
  // 6. Transparent Implementation
  // 7. Sustainability anad Longevity

  return (
    <>
      <Flex
        p={{ base: 8, lg: 16 }}
        gap={{ base: 5, lg: 8 }}
        direction={'column'}
        bgColor='brand.200'
      >
        <Heading as='h2' textAlign='center'>
          Our Approach
        </Heading>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          data-testid='approaches-container'
          className='gap-x-8'
        >
          <GridItem>
            <ApproachItem href='/about' title='Community Centered Approach' />
          </GridItem>
          <GridItem className='md:even:mt-10'>
            <ApproachItem href='/about' title='Needs Assessment and Dialogue' />
          </GridItem>
          <GridItem>
            <ApproachItem href='/about' title='Inclusive Planning' />
          </GridItem>
          <GridItem className='md:even:mt-10'>
            <ApproachItem href='/about' title='Education Advocacy' />
          </GridItem>
          <GridItem className='md:even:mt-10'>
            <ApproachItem href='/about' title='Legal Workforce Engagement' />
          </GridItem>
          <GridItem className='md:even:mt-10'>
            <ApproachItem href='/about' title='Transparent Implementation' />
          </GridItem>
          <GridItem className='md:even:mt-10'>
            <ApproachItem href='/about' title='Sustainability and Longevity' />
          </GridItem>
        </Grid>
      </Flex>
    </>
  )
}
