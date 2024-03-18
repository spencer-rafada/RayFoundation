import { screen, render } from '@testing-library/react'
import FooterLinks from '../FooterLinks'

describe('FooterLinks', () => {
  it('should render the LinkedIn icon', () => {
    render(<FooterLinks />)
    const linkedinIcon = screen.getByTestId('footer-social-links-linkedin')
    expect(linkedinIcon).toBeInTheDocument()
  })
  it('should render the Gmail icon', () => {
    render(<FooterLinks />)
    const gmailIcon = screen.getByTestId('footer-social-links-gmail')
    expect(gmailIcon).toBeInTheDocument()
  })
  it('should render the Facebook icon', () => {
    render(<FooterLinks />)
    const facebookIcon = screen.getByTestId('footer-social-links-facebook')
    expect(facebookIcon).toBeInTheDocument()
  })
  it('should render the Instagram icon', () => {
    render(<FooterLinks />)
    const instagramIcon = screen.getByTestId('footer-social-links-instagram')
    expect(instagramIcon).toBeInTheDocument()
  })
})
