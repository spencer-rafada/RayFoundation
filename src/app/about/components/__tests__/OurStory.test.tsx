import { screen, render } from '@testing-library/react'
import OurStory from '../OurStory'

describe('OurStory', () => {
  it('should render our story heading', () => {
    render(<OurStory />)
    expect(screen.getByTestId('about-us-our-story-heading')).toBeInTheDocument()
  })
  it('should render our paragraphs container', () => {
    render(<OurStory />)
    expect(
      screen.getByTestId('about-us-our-story-paragraphs')
    ).toBeInTheDocument()
  })
})
