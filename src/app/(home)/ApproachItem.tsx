'use client'
import { Card, CardHeader, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function ApproachItem({
  href,
  title,
}: {
  href: string
  title: string
}) {
  const handleClick = () => {
    sessionStorage.setItem('approach', 'true')
  }

  return (
    <Link href={href} onClick={handleClick}>
      <Card>
        <CardHeader>
          <Heading as='h3' size='md'>
            {title}
          </Heading>
        </CardHeader>
      </Card>
    </Link>
  )
}
