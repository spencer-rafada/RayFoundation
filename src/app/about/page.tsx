import { Metadata } from 'next'
import React from 'react'
import AboutContent from './components/AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Page',
}

export default function About() {
  return (
    <>
      <AboutContent />
    </>
  )
}
