import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type IconPositionProps = 'left' | 'right'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: IconPositionProps
  isDisabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  icon,
  iconPosition = 'left',
  isDisabled = false,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper isDisabled={isDisabled}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper hasIcon={!!icon} iconPosition={iconPosition}>
        {!!icon && icon}
        <S.Input
          disabled={isDisabled}
          type="text"
          onChange={onChange}
          value={value}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
