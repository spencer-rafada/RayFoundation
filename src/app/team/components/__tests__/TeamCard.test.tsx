import { screen, render } from '@testing-library/react'
import TeamCard from '../TeamCard'

describe('Team Card', () => {
  it('should render the member img', () => {
    render(<TeamCard name='Spencer Rafada' position='Software Engineer' />)
    expect(screen.getByTestId('team-card-img')).toBeInTheDocument()
  })
  it('should render the member name', () => {
    render(<TeamCard name='Spencer Rafada' position='Software Engineer' />)
    expect(screen.getByTestId('team-card-name')).toBeInTheDocument()
  })
  it('should render the member position', () => {
    render(<TeamCard name='Spencer Rafada' position='Software Engineer' />)
    expect(screen.getByTestId('team-card-position')).toBeInTheDocument()
  })
})
