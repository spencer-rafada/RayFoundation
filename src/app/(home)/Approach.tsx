import {
  Card,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
} from '@chakra-ui/react'
import React from 'react'

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
            <Link href='/about'>
              <Card>
                <CardHeader>
                  <Heading as='h3' size='md'>
                    Community Centered Approach
                  </Heading>
                </CardHeader>
              </Card>
            </Link>
          </GridItem>
          <GridItem className='md:even:mt-10'>
            <Link href='/about'>
              <Card>
                <CardHeader>
                  <Heading as='h3' size='md'>
                    Needs Assessment and Dialogue
                  </Heading>
                </CardHeader>
              </Card>
            </Link>
          </GridItem>
          <GridItem>
            <Link href='/about'>
              <Card>
                <CardHeader>
                  <Heading as='h3' size='md'>
                    Inclusive Planning
                  </Heading>
                </CardHeader>
              </Card>
            </Link>
          </GridItem>
          <GridItem className='md:even:mt-10'>
            <Link href='/about'>
              <Card>
                <CardHeader>
                  <Heading as='h3' size='md'>
                    Education Advocacy
                  </Heading>
                </CardHeader>
              </Card>
            </Link>
          </GridItem>
        </Grid>
      </Flex>
    </>
  )
}
