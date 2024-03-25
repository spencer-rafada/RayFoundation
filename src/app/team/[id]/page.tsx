import { Metadata } from 'next'
import React from 'react'
import { promises as fs } from 'fs'
import { Flex, Heading, Image, Text } from '@chakra-ui/react'

type MetadataProps = {
  params: { id: string }
}

export async function generateMetadata({
  params,
}: MetadataProps): // parent: ResolvingMetadata
Promise<Metadata> {
  const id = params.id

  const file = await fs.readFile(
    process.cwd() + '/src/app/team/team.json',
    'utf-8'
  )
  const data = JSON.parse(file)

  const teamMember = data.find(
    (teamMember: { id: string; name: string }) => teamMember.id === id
  )

  return {
    title: `${teamMember.name} | ${teamMember.position}`,
    description: `Meet ${teamMember.name} is the ${teamMember.position} of Ray Foundation`,
  }
}

// export async function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }]
// }

export default async function TeamMember({
  params,
}: {
  params: { id: string }
}) {
  const file = await fs.readFile(
    process.cwd() + '/src/app/team/team.json',
    'utf-8'
  )

  const data = JSON.parse(file)

  const teamMember = data.find(
    (teamMember: { id: string; name: string }) => teamMember.id === params.id
  )

  return (
    <>
      <Flex
        p={{ base: 8, md: 16 }}
        direction={{ base: 'column', md: 'row-reverse' }}
        justify='space-between'
        gap={{ base: 4, md: 6 }}
      >
        <Flex justify='center' align='center'>
          <Image
            src={teamMember.image}
            boxSize='250px'
            alt={`Image of ${teamMember.name}`}
            borderRadius='full'
            objectFit='cover'
          />
        </Flex>
        <Flex direction='column' gap={{ base: 2, md: 3 }}>
          <Flex direction='column' gap={{ base: 2, md: 3 }}>
            <Heading as='h1' size={{ base: 'xl', md: '2xl' }}>
              {teamMember.name}
            </Heading>
            <Heading as='h3' size={{ base: 'lg', md: 'xl' }}>
              {teamMember.position}
            </Heading>
          </Flex>
          <Flex direction='column' gap={{ base: 2, md: 3 }}>
            {teamMember.description.map((desc: string, index: number) => {
              return (
                <Text key={index} fontSize={{ base: 'md', md: 'lg' }}>
                  {desc}
                </Text>
              )
            })}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
