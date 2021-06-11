import renderer from 'react-test-renderer'
import Button from '.'
import React from 'react'
import { ButtonVariant } from '../../enums/button-variants'
describe('Button Component', () => {
    const numberButtonProps = {
        text: 'Click Me',
        variant: ButtonVariant.NUMBER,
    }
    const operationButtonProps = {
        text: 'Click Me',
        variant: ButtonVariant.OPERATION,
    }

    it('selected number button variant matches snapshot', () => {
        const tree = renderer.create(<Button {...numberButtonProps} isSelected />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('unselected number button variant matches snapshot', () => {
        const tree = renderer.create(<Button {...numberButtonProps} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('operation button variant matches snapshot', () => {
        const tree = renderer.create(<Button {...operationButtonProps} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('disabled operation button variant matches snapshot', () => {
        const tree = renderer.create(<Button {...operationButtonProps} isDisabled />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
