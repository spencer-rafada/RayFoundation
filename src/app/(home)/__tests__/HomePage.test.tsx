import { render, waitFor } from '@testing-library/react'
import React from 'react'
import Home from '@/app/page'
import '@testing-library/jest-dom'

describe('Home Page', () => {
  it('should render the hero header', async () => {
    const { getByText } = render(<Home />)
    const lazyElement = await waitFor(() =>
      getByText('Transforming Lives Through Service')
    )

    expect(lazyElement).toBeInTheDocument()
  })
})
