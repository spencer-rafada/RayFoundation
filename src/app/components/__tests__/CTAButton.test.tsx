import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CTAButton from '../CTAButton'
import React from 'react'

describe('CTAButton', () => {
  it('should render the donate button', () => {
    render(
      <CTAButton
        type='cta_donate'
        variant='solid'
        size='md'
        colorScheme='brand'
      />
    )
    expect(screen.getByText('Donate Now')).toBeInTheDocument()
  })
  it('should render Button when type is incorrect', () => {
    render(
      <CTAButton
        type='cta_test'
        variant='solid'
        size='md'
        colorScheme='brand'
      />
    )
    expect(screen.getByText('CTA Button')).toBeInTheDocument()
  })
})
