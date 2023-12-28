import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import Navbar from '../Navbar'

describe('NavBar', () => {
  it('should render the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Ray Foundation')).toBeInTheDocument()
  })
})
