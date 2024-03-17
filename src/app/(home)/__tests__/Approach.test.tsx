import { screen, render } from '@testing-library/react'
import Approach from '../Approach'

describe('Approach', () => {
  it('should render the approach container', () => {
    render(<Approach />)
    expect(screen.getByTestId('approaches-container')).toBeInTheDocument()
  })
})
