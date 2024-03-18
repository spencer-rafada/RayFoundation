import { Metadata } from 'next'
import React from 'react'
import OurStory from './components/OurStory'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Page',
}

export default function About() {
  return (
    <>
      <OurStory />
    </>
  )
}
