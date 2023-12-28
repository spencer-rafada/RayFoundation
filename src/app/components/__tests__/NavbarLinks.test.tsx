import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import NavbarLinks from '../NavbarLinks'

describe('NavbarLinks', () => {
  it('should render one link if drawer is closed', () => {
    render(
      <NavbarLinks
        links={[{ to: '/', text: 'Home' }]}
        isOpen={false}
        onClose={jest.fn()}
        btnRef={React.createRef()}
      />
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('should render two links if drawer is open', () => {
    render(
      <NavbarLinks
        links={[
          { to: '/', text: 'Home' },
          { to: '/about', text: 'About' },
        ]}
        isOpen={true}
        onClose={jest.fn()}
        btnRef={React.createRef()}
      />
    )
    expect(screen.getAllByText('Home')).toHaveLength(2)
  })
})
