import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import NavbarLinkToggle from '../NavbarLinkToggle'

describe('NavbarLinkToggle', () => {
  it('should render the toggle button', () => {
    render(<NavbarLinkToggle isOpen={true} toggle={jest.fn()} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('should call the toggle button when clicked', () => {
    const toggle = jest.fn()
    render(<NavbarLinkToggle isOpen={true} toggle={toggle} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button'))
    expect(toggle).toHaveBeenCalled()
  })
})
