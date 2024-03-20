import { screen, render, fireEvent } from '@testing-library/react'
import Approach from '../Approaches'

describe('Approaches', () => {
  it('should render the accordions container', () => {
    render(<Approach />)
    expect(screen.getByTestId('about-approaches-container')).toBeInTheDocument()
  })
  it('should open the accordion when clicked', () => {
    render(<Approach />)
    const accordion = screen.getByTestId('about-approaches-accordion-community')
    fireEvent.click(accordion)
    expect(
      screen.getByTestId('about-approaches-accordion-community-content')
    ).toBeInTheDocument()
  })
})
