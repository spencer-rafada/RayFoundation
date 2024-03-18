'use client'
import { Flex, Icon } from '@chakra-ui/react'
import { SiLinkedin, SiGmail, SiFacebook, SiInstagram } from 'react-icons/si'
import React from 'react'
import Link from 'next/link'

export default function FooterLinks() {
  return (
    <Flex gap={{ base: 4, md: 5 }} justify={{ base: 'center', md: 'start' }}>
      <Link
        href='https://www.facebook.com/profile.php?id=100090834922470&mibextid=LQQJ4d'
        target='_blank'
        data-testid='footer-social-links-facebook'
      >
        <Icon
          as={SiFacebook}
          className='cursor-pointer'
          w={6}
          h={6}
          color='brand.700'
        />
      </Link>
      <Link
        href='https://www.linkedin.com/company/ray-foundation/'
        target='_blank'
        data-testid='footer-social-links-linkedin'
      >
        <Icon
          as={SiLinkedin}
          className='cursor-pointer'
          w={6}
          h={6}
          color='brand.700'
        />
      </Link>
      <Link
        href='https://www.instagram.com/ray.foundation?igshid=MmIzYWVlNDQ5Yg%3D%3D'
        target='_blank'
        data-testid='footer-social-links-instagram'
      >
        <Icon
          as={SiInstagram}
          className='cursor-pointer'
          w={6}
          h={6}
          color='brand.700'
        />
      </Link>
      <Link
        href='mailto:ray.foundation@outlook.com'
        target='_blank'
        data-testid='footer-social-links-gmail'
      >
        <Icon
          as={SiGmail}
          className='cursor-pointer'
          w={6}
          h={6}
          color='brand.700'
        />
      </Link>
    </Flex>
  )
}
