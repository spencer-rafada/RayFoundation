import React from 'react'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'

export default function NavbarLink({ to, text }: { to: string; text: string }) {
  return (
    <Link href={to}>
      <Button fontSize={'1.1rem'} variant='ghost' colorScheme='brand'>
        {text}
      </Button>
    </Link>
  )
}
