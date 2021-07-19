import styled, { css } from 'styled-components'
import { GameCardSliderProps } from '.'

type WrapperProps = Pick<GameCardSliderProps, 'color'>

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, color }) => css`
    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 ${theme.font.sizes.small};
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin: 0 -${theme.font.sizes.small};
    }

    .slick-arrow {
      color: ${theme.colors[color!]};
      cursor: pointer;
      width: 2.5rem;
      height: 2.5rem;

      &.slick-prev {
        position: absolute;
        left: -5.2rem;
        top: 50%;
        transform: translateY(-50%);
      }

      &.slick-next {
        position: absolute;
        right: -5.2rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
