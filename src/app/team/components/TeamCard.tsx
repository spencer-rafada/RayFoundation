import React from 'react'
import { Avatar, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function TeamCard({
  id,
  name,
  imgSrc,
  position,
}: {
  id: string
  name: string
  imgSrc?: string
  position: string
}) {
  return (
    <Link href={`/team/${id}`}>
      <Flex direction='column' p='4' alignItems='center'>
        <Avatar
          name='Spencer Rafada'
          src={imgSrc}
          size={{ base: 'xl', md: '2xl' }}
          data-testid='team-card-img'
        />
        <Text
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight='bold'
          data-testid='team-card-name'
          color='brand.700'
        >
          {name}
        </Text>
        <Text data-testid='team-card-position'>{position}</Text>
      </Flex>
    </Link>
  )
}
