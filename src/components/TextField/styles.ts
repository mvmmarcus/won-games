import styled, { css, DefaultTheme } from 'styled-components'
import { IconPositionProps, TextFieldProps } from '.'

type WrapperProps = Pick<TextFieldProps, 'isDisabled'>

type InputWrapperProps = {
  hasIcon: boolean
  iconPosition?: IconPositionProps
}

const wrapperModifiers = {
  hasIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2.4rem;
      color: ${theme.colors.gray};
    }
  `,

  iconLeft: (theme: DefaultTheme) => css`
    svg {
      order: 0;

      & + input {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  iconRight: (theme: DefaultTheme) => css`
    svg {
      order: 1;

      & + input {
        margin-right: ${theme.spacings.xxsmall};
      }
    }
  `,

  isDisabled: (theme: DefaultTheme) => css`
    ${Label} {
      color: ${theme.colors.disabled};
    }

    ${Input} {
      color: ${theme.colors.disabled};

      &::placeholder {
        color: ${theme.colors.disabled};
      }
    }

    svg {
      color: ${theme.colors.disabled};
    }
  `
}

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, hasIcon, iconPosition }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    ${hasIcon && wrapperModifiers.hasIcon(theme)}
    ${iconPosition === 'left'
      ? wrapperModifiers.iconLeft(theme)
      : wrapperModifiers.iconRight(theme)}
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &::placeholder {
      color: ${theme.colors.gray};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isDisabled }) => css`
    ${isDisabled && wrapperModifiers.isDisabled(theme)}
  `}
`
