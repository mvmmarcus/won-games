import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Other Ocean',
  price: '$ 235,00',
  img: '/cover-image.png'
}

describe('<GameCard />', () => {
  it('should render headings, pricing badge and favorite icon', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /Population Zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Other Ocean/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/235,00/i)).toBeInTheDocument()
  })

  it('should render cover image', () => {
    renderWithTheme(<GameCard {...props} img="/cover-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/cover-image.png'
    )
  })

  it('should render with ribbon', () => {
    renderWithTheme(<GameCard {...props} ribbon="20% OFF" />)

    expect(screen.getByText(/20% OFF/i)).toBeInTheDocument()
  })

  it('should render a field favorite icon when favorite is true', () => {
    renderWithTheme(
      <GameCard {...props} promotionalPrice="$ 215,00" isFavorite />
    )

    expect(screen.getByLabelText(/Remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()

    renderWithTheme(
      <GameCard
        {...props}
        promotionalPrice="$ 215,00"
        isFavorite
        onFav={onFav}
      />
    )

    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toBeCalled()
  })
})
