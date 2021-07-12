import React from 'react'
import * as S from './styles'

export type ButtonPros = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  icon?: React.ReactNode
  fullWidth?: boolean
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonPros) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
