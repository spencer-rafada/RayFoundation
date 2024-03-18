import { screen, render } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('should render the logo and links container', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer-logo')).toBeInTheDocument()
    expect(screen.getByTestId('footer-social-links')).toBeInTheDocument()
  })
  it('should render the address', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer-address')).toBeInTheDocument()
  })
})
