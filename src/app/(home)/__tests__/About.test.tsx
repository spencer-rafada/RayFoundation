import { screen, render } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import About from '../About'

describe('About Section', () => {
  it('should render header', () => {
    render(<About />)
    expect(
      screen.getByText(
        'Empowering communities through education, clean water, and healthcare initiatives.'
      )
    ).toBeInTheDocument()
  })
  it('should render subheading', () => {
    render(<About />)
    expect(
      screen.getByText(
        'We are a non-profit organization dedicated to providing quality education to underprivileged children.'
      )
    ).toBeInTheDocument()
  })
  it('should render the overline', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })
  it('should render image', () => {
    render(<About />)
    expect(screen.getByTestId('about-image')).toBeInTheDocument()
  })
})
