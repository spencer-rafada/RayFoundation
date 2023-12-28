import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import NavbarLink from '../NavbarLink'

describe('NavbarLink', () => {
  it('should render the link', () => {
    render(<NavbarLink to='/' text='Home' />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  })
})
