/* eslint-disable quotes */
import { screen, render } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import CTASection from '../CTASection'

describe('CTASection', () => {
  it('should render the heading', () => {
    render(<CTASection heading='Get Involved and Make a Difference' />)
    expect(screen.getByTestId('cta-section-heading')).toBeInTheDocument()
  })
  it('should render the subheading', () => {
    render(
      <CTASection
        heading='Test Heading'
        subheading="Education is a light, let's keep it shining bright. Support our cause through donations."
      />
    )
    expect(
      expect(screen.getByTestId('cta-section-subheading')).toBeInTheDocument()
    )
  })
  it('should render the button', () => {
    render(<CTASection heading='test header' />)
    expect(screen.getByTestId('cta-section-button')).toBeInTheDocument()
  })
})
