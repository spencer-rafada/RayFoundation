import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Flex,
  Heading,
  AccordionPanel,
  AccordionIcon,
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
      >
        <Heading as='h2' textAlign='center' color='brand.500'>
          Our Approach
        </Heading>
        <Accordion
          data-testid='about-approaches-container'
          defaultIndex={[0]}
          allowMultiple
          bgColor='white'
        >
          <AccordionItem>
            <AccordionButton
              className='justify-between'
              data-testid='about-approaches-accordion-community'
            >
              <Heading as='h3' size='md'>
                Community Centered Approach
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel data-testid='about-approaches-accordion-community-content'>
              At the Ray Foundation, we firmly believe in the power of community
              collaboration to drive positive change in Sierra Leone. Our
              approach centers around fostering a collective spirit of
              empowerment and engagement to uplift the lives of those we serve.
              By involving the community at every step, we ensure that our
              initiatives are tailored to local needs, sustainable, and truly
              transformative in our effort to provide education, healthcare, and
              clean water in Sierra Leone.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton className='justify-between'>
              <Heading as='h3' size='md'>
                Needs Assessment and Dialogue
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              We start by listening to the voices of the community. Through open
              dialogues and needs assessments, we gain a comprehensive
              understanding of the challenges, aspirations, and priorities that
              shape the community&apos;s well-being.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton className='justify-between'>
              <Heading as='h3' size='md'>
                Inclusive Planning
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              Our planning process involves community members, local leaders,
              and experts. Together, we co-create strategies that address
              identified needs while aligning with the community&apos;s culture,
              values, and existing resources.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton className='justify-between'>
              <Heading as='h3' size='md'>
                Education Advocacy
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              In alignment with our mission, we actively engage with community
              members to raise awareness about the transformative power of
              education. We encourage parents, guardians, and children to value
              and prioritize learning.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton className='justify-between'>
              <Heading as='h3' size='md'>
                Legal Workforce Engagement
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              We prioritize hiring skilled labor from within the community,
              supporting economic growth and providing employment opportunities.
              This not only enhances the project&apos;s impact but also fosters
              a sense of pride and ownership.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton className='justify-between'>
              <Heading as='h3' size='md'>
                Transparent Implementation
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              Transparency is paramount to building trust. We ensure that every
              step of the project implementation is communicated to the
              community, showcasing and documenting our progress and involving
              them in decision-making whenever needed.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton className='justify-between'>
              <Heading as='h3' size='md'>
                Sustainability anad Longevity
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              Our projects are designed for enduring impact. We collaborate with
              the community to develop maintenance and sustainability plans,
              ensuring that the benefits of our initiatives continue to be felt
              for generations to come.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </>
  )
}
