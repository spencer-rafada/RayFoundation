import { screen, render } from '@testing-library/react'
import React from 'react'
import Home from '../page'
import '@testing-library/jest-dom'

describe('Home Page', () => {
  it('should render home page', () => {
    render(<Home />)

    expect(screen.getByText('Ray Foundation')).toBeInTheDocument()
  })
})
