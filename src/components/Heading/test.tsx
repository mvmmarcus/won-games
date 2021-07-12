import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading>Heading</Heading>)
    expect(screen.getByRole('heading', { name: /heading/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white heading when color is passed', () => {
    renderWithTheme(<Heading color="white">Heading</Heading>)
    expect(screen.getByRole('heading', { name: /heading/i })).toHaveStyle({
      color: '#fafafa'
    })
  })

  it('should render a heading with lineLeft when lineLeft is passed', () => {
    renderWithTheme(<Heading lineLeft>Heading</Heading>)
    expect(screen.getByRole('heading', { name: /heading/i })).toHaveStyle({
      borderLeft: '0.7rem solid #3CD3C1'
    })
  })

  it('should render a heading with lineBottom when lineBottom is passed', () => {
    renderWithTheme(<Heading lineBottom>Heading</Heading>)
    expect(screen.getByRole('heading', { name: /heading/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})
