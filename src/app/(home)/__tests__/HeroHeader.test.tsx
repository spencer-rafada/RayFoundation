import { screen, render } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import HeroHeader from '../HeroHeader'

describe('HeroHeader', () => {
  it('renders the HeroHeader component', () => {
    render(<HeroHeader />)
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Transforming Lives Through Service'
    )
  })
  it('render the Call To Action Button', () => {
    render(<HeroHeader />)
    expect(screen.getByRole('button')).toHaveTextContent('Donate Now')
  })
})
