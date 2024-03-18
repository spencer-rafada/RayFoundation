import { Metadata } from 'next'
import React from 'react'
import OurStory from './components/OurStory'
import VisionMission from './components/VisionMission'
import CTASection from '../(home)/CTASection'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Page',
}

export default function About() {
  return (
    <>
      <OurStory />
      <VisionMission />
      <CTASection
        heading='Get to Know Us More'
        subheading='We can tell you more about how your donations are put in to good use.'
      />
    </>
  )
}
