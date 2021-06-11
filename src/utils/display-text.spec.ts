import { getDisplayText } from './display-text'

describe('DisplayText Utils', () => {
    describe('getDisplayText', () => {
        it('should return the result if defined', () => {
            expect(getDisplayText(10, [])).toBe('10')
        })
        it('should return the result even if result is a falsey value (0)', () => {
            expect(getDisplayText(0, [])).toBe('0')
        })
        it('should return pretty version of selected numbers if result is undefined', () => {
            expect(getDisplayText(undefined, [1, 2, 3])).toBe('[ 1 , 2 , 3 ]')
        })
        it('should return instructional text "Choose Numbers", if no result and no selected numbers', () => {
            expect(getDisplayText(undefined, [])).toBe('Choose Numbers')
        })
    })
})
