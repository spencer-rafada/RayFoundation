'use client'
import React, { useEffect, useRef } from 'react'
import OurStory from './OurStory'
import VisionMission from './VisionMission'
import CTASection from '@/app/(home)/CTASection'
import Approach from './Approaches'
import { Box } from '@chakra-ui/react'

export default function AboutContent() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (sessionStorage.getItem('approach')) {
      setTimeout(() => {
        ref.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 500)
      sessionStorage.removeItem('approach')
    }
  }, [ref])

  return (
    <>
      <OurStory />
      <VisionMission />
      <Box ref={ref as React.RefObject<HTMLDivElement>}>
        <Approach />
      </Box>
      <CTASection
        heading='Get to Know Us More'
        subheading='We can tell you more about how your donations are put in to good use.'
      />
    </>
  )
}
