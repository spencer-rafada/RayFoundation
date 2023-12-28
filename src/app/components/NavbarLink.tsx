import React from 'react'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'

export default function NavbarLink({ to, text }: { to: string; text: string }) {
  return (
    <Link href={to}>
      <Text>{text}</Text>
    </Link>
  )
}
