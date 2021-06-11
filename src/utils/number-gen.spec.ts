import { generateUniqueNumbers } from './number-gen'

describe('number-gen Utils', () => {
    describe('generateUniqueNumbers', () => {
        it('should return an array of length if 10 total numbers requested', () => {
            expect(generateUniqueNumbers(10, 0, 100)).toHaveLength(10)
        })
        it('should return an array of numbers with in the min max range requested', () => {
            let min = 0
            let max = 100
            let arr = generateUniqueNumbers(10, min, max)
            arr = arr.filter((number) => number >= min && number <= max)
            expect(arr).toHaveLength(10)
        })
        it('should return an array of numbers with in the min max range requested, with min negative and max positive', () => {
            let min = -10
            let max = 10
            let arr = generateUniqueNumbers(10, min, max)
            arr = arr.filter((number) => number >= min && number <= max)
            expect(arr).toHaveLength(10)
        })
        it('should return an array of numbers with in the min max range requested, with min negative and max negative', () => {
            let min = -10
            let max = -5
            let arr = generateUniqueNumbers(3, min, max)
            arr = arr.filter((number) => number >= min && number <= max)
            expect(arr).toHaveLength(3)
        })
        it('should throw an error when more numbers requested than in range', () => {
            let min = 0
            let max = 5
            expect(() => {
                generateUniqueNumbers(10, min, max)
            }).toThrow(Error)
        })
        it('should throw an error when min is greater than max', () => {
            let min = 10
            let max = 5
            expect(() => {
                generateUniqueNumbers(2, min, max)
            }).toThrow(Error)
        })
    })
})
