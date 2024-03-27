import { Metadata } from 'next'
import React from 'react'
import TeamCard from './components/TeamCard'
import teamData from './team.json'
import { Flex, Heading } from '@chakra-ui/react'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Team Page',
}

export default function Team() {
  return (
    <>
      <Flex p={{ base: 8, md: 16 }} direction='column' gap={{ base: 4, md: 6 }}>
        <Heading
          data-testid='team-page-header'
          as='h1'
          size='2xl'
          textAlign='center'
          color='brand.500'
        >
          Team
        </Heading>
        <Flex data-testid='team-page-cards' wrap='wrap' justify='center'>
          {teamData.map((teamMember) => {
            return (
              <TeamCard
                key={teamMember.id}
                id={teamMember.id}
                name={teamMember.name}
                imgSrc={teamMember.image}
                position={teamMember.position}
              />
            )
          })}
        </Flex>
      </Flex>
    </>
  )
}
