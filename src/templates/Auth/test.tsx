import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the Auth template correctly', () => {
    renderWithTheme(
      <Auth title="Auth Template">
        <input type="text" aria-label="textBox" />
      </Auth>
    )

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming platform./i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /auth template/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('textbox', { name: /textBox/i })
    ).toBeInTheDocument()
  })
})
