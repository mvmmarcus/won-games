import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from 'styled-icons/material-outlined'
import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  price: string
  coverImage: string
  promotionalPrice?: string
  isFavorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFav?: () => void
}

const GameCard = ({
  title,
  developer,
  price,
  coverImage,
  promotionalPrice,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  isFavorite = false,
  onFav
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}
    {!!coverImage && (
      <S.ImageBox>
        <img src={coverImage} alt={title} />
      </S.ImageBox>
    )}
    <S.Content>
      <S.TitleGroup>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.TitleGroup>

      <S.FavButton onClick={onFav} role="button">
        {isFavorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>

      <S.PricingBox>
        {!!promotionalPrice && <S.OldValue>{price}</S.OldValue>}
        <S.PricingBadge>{promotionalPrice || price}</S.PricingBadge>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.PricingBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
