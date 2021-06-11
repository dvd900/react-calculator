import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from './index'
import '@testing-library/jest-dom/extend-expect'

const addOperation = {
    text: 'add',
    execute: jest.fn(() => 1337),
}
const numbers = [1, 2, 3]
const standardProps = { numbers, operations: [addOperation] }
describe('Calculator Component', () => {
    it("initially renders with 'choose numbers' in the display", () => {
        const { getByText } = render(<Calculator numbers={numbers} />)
        expect(getByText('Choose Numbers')).toBeInTheDocument()
    })
    it('initially renders with all 3 number buttons and an operation button', () => {
        const { getByText } = render(<Calculator {...standardProps} />)
        expect(getByText('1')).toBeInTheDocument()
        expect(getByText('2')).toBeInTheDocument()
        expect(getByText('3')).toBeInTheDocument()
        expect(getByText('add')).toBeInTheDocument()
    })
    it('should continue to prompt user to select numbers if operation is clicked with no numbers selected', () => {
        const { getByText } = render(<Calculator {...standardProps} />)
        fireEvent.click(getByText('add'))
        expect(getByText('Choose Numbers')).toBeInTheDocument()
    })
    it('shows the number that is clicked in a list in the display', () => {
        const { getByText } = render(<Calculator {...standardProps} />)
        fireEvent.click(getByText('1'))
        expect(getByText('[ 1 ]')).toBeInTheDocument()
    })
    it('shows the the numbers that are clicked in a list in the display, in order', () => {
        const { getByText } = render(<Calculator {...standardProps} />)
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('1'))
        expect(getByText('[ 3 , 1 ]')).toBeInTheDocument()
    })
    it('removes the number from the display if clicked twice to deselect', () => {
        const { getByText } = render(<Calculator {...standardProps} />)
        fireEvent.click(getByText('1'))
        expect(screen.getByText('[ 1 ]')).toBeInTheDocument()
        fireEvent.click(getByText('1'))
        expect(getByText('Choose Numbers')).toBeInTheDocument()
    })
    it('calls execute on operation with array of selected numbers when clicked', () => {
        const { getByText } = render(<Calculator {...standardProps} />)
        fireEvent.click(getByText('1'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('add'))
        expect(addOperation.execute).toBeCalledWith([1, 3])
    })
    it('displays the result of the operation on the display when operation button is clicked', () => {
        const { getByText } = render(<Calculator {...standardProps} />)
        fireEvent.click(getByText('1'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('add'))
        expect(getByText(1337)).toBeInTheDocument()
    })
    it('displays the result of the operation on the display when operation button is clicked', () => {
        const { getByText } = render(<Calculator {...standardProps} />)
        fireEvent.click(getByText('1'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('add'))
        expect(getByText(1337)).toBeInTheDocument()
    })
    it('continues to properly display selected numbers after operation is preformed', () => {
        const { getByText } = render(<Calculator {...standardProps} />)
        fireEvent.click(getByText('1'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('add'))
        expect(getByText(1337)).toBeInTheDocument()
        fireEvent.click(getByText('2'))
        expect(getByText('[ 2 ]')).toBeInTheDocument()
    })
})
