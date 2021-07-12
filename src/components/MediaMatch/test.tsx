import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import MediaMatch from '.'

describe('<MediaMatch />', () => {
  it('should not render MediaMatch child by default', () => {
    renderWithTheme(<MediaMatch>MediaMatch</MediaMatch>)
    expect(screen.getByText(/MediaMatch/i)).toHaveStyle({
      display: 'none'
    })
  })

  it('should render MediaMatch child when document is greater than small', () => {
    renderWithTheme(<MediaMatch greaterThan="small">MediaMatch</MediaMatch>)

    expect(screen.getByText(/MediaMatch/i)).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 450px)'
      }
    )
  })

  it('should render MediaMatch child when document is less than small', () => {
    renderWithTheme(<MediaMatch lessThan="small">MediaMatch</MediaMatch>)

    expect(screen.getByText(/MediaMatch/i)).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(max-width: 450px)'
      }
    )
  })
})
