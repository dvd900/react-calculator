import styled, { css } from 'styled-components'
import { ButtonVariant } from '../../enums/button-variants'
import { COLOR2, COLOR1, COLOR6 } from '../../styles/colors'
import { lgText, smText } from '../../styles/text'
interface StyledButtonProps {
    isSelected: boolean
    variant: ButtonVariant
}

export const StyledButton = styled.button<StyledButtonProps>`
    border: 2px solid black;
    box-shadow: 3px 6px #6a7573;
    :active {
        box-shadow: 2px 3px #535c5a;
        transform: translate(2px, 4px);
    }
    :disabled {
        box-shadow: none;
        filter: brightness(90%);
    }
    :hover:enabled {
        ${(props) =>
            !props.isSelected &&
            css`
                filter: brightness(125%);
            `}
    }

    ${(props) =>
        props.variant === ButtonVariant.NUMBER &&
        css`
            width: 7rem;
            height: 7rem;
            border-radius: 50%;
            ${smText}
            background-color: ${COLOR1};
        `}
    ${(props) =>
        props.isSelected &&
        css`
            background-color: ${COLOR2};
            border: 2px double black;
        `}
    ${(props) =>
        props.variant === ButtonVariant.OPERATION &&
        css`
            ${lgText}
            width: 5rem;
            height: 5rem;
            background-color: ${COLOR6};
        `}
`
