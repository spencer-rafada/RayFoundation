import { screen, render } from '@testing-library/react'
import VisionMission from '../VisionMission'

describe('VisionMission', () => {
  it('should render the vision container', () => {
    render(<VisionMission />)
    expect(screen.getByTestId('about-us-vision')).toBeInTheDocument()
  })
  it('should render the mission container', () => {
    render(<VisionMission />)
    expect(screen.getByTestId('about-us-mission')).toBeInTheDocument()
  })
})
