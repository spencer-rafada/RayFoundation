import { screen, render } from '@testing-library/react'
import Team from '../../page'

describe('Team', () => {
  it('should render the team header', () => {
    render(<Team />)
    expect(screen.getByTestId('team-page-header')).toBeInTheDocument()
  })
  it('should render the team cards', () => {
    render(<Team />)
    expect(screen.getByTestId('team-page-cards')).toBeInTheDocument()
  })
})
