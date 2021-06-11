import React from 'react'
import { ButtonVariant } from '../../enums/button-variants'
import { StyledButton } from './styled'

interface Props {
    text: string
    variant?: ButtonVariant
    isSelected?: boolean
    isDisabled?: boolean
    onClick?: () => void
}

/* concat styles based on props */
const Button = ({
    text,
    variant = ButtonVariant.NUMBER,
    isSelected = false,
    isDisabled = false,
    onClick,
}: Props) => {
    return (
        <StyledButton
            isSelected={isSelected}
            variant={variant}
            onClick={onClick}
            disabled={isDisabled}
        >
            {text}
        </StyledButton>
    )
}
export default Button
