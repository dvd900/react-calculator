import { AddOperation, SubtractOperation } from './operations'

describe('Add Operation', () => {
    const op = new AddOperation('add')
    it('should return 0 if empty array passed', () => {
        expect(op.execute([])).toBe(0)
    })
    it('should return value of first element if array of length 1 is passed', () => {
        expect(op.execute([100])).toBe(100)
    })
    it('should return sum of array', () => {
        expect(op.execute([1, 2, 3])).toBe(6)
    })
})
describe('Subtract Operation', () => {
    const op = new SubtractOperation('subtract')
    it('should return 0 if empty array passed', () => {
        expect(op.execute([])).toBe(0)
    })
    it('should return value of first element if array of length 1 is passed', () => {
        expect(op.execute([100])).toBe(100)
    })
    it('should return first value minus all other values of array', () => {
        expect(op.execute([10, 1, 2])).toBe(7)
    })
    it('should return first value minus all other values of array and handle negative values', () => {
        expect(op.execute([1, 10, 10])).toBe(-19)
    })
})
