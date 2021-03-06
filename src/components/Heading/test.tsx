import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Heading</Heading>)
    expect(screen.getByRole('heading', { name: /heading/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a white heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Heading</Heading>)
    expect(screen.getByRole('heading', { name: /heading/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with lineLeft when lineLeft is passed', () => {
    renderWithTheme(<Heading lineLeft>Heading</Heading>)
    expect(screen.getByRole('heading', { name: /heading/i })).toHaveStyle({
      borderLeft: '0.7rem solid #F231A5'
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

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
