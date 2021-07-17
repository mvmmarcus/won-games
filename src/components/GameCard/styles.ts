import styled, { css } from 'styled-components'

import { Wrapper as ButtonWrapper } from 'components/Button/styles'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const ImageBox = styled.div`
  height: 14rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;

    background: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
  `}
`

export const TitleGroup = styled.div`
  max-width: calc(100% - 2.5rem);
  word-wrap: break-word;
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
`

export const Developer = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
  `}
`

export const PricingBox = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.4rem;

  ${ButtonWrapper} {
    height: 2.2rem;
    border-radius: 0.2rem;
    margin-left: 0.4rem;
  }
`

export const OldValue = styled.h3`
  ${({ theme }) => css`
    text-decoration: line-through;
    align-items: center;

    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`

export const PricingBadge = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    border-radius: 0.2rem;
    height: 2.2rem;
    align-items: center;

    margin-left: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    padding: 0 ${theme.font.sizes.xsmall};
  `}
`
