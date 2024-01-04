/* eslint-disable quotes */
import { screen, render } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import CTASection from '../CTASection'

describe('CTASection', () => {
  it('should render the heading', () => {
    render(<CTASection />)
    expect(
      screen.getByText('Get Involved and Make a Difference')
    ).toBeInTheDocument()
  })
  it('should render the subheading', () => {
    render(<CTASection />)
    expect(
      screen.getByText(
        "Education is a light, let's keep it shining bright. Support our cause through donations."
      )
    )
  })
  it('should render the button', () => {
    render(<CTASection />)
    expect(screen.getByText('Donate Now')).toBeInTheDocument()
  })
})
