export const generateUniqueNumbers = (totalNumber: number, min: number, max: number): number[] => {
    if (min >= max) {
        throw Error(`Min ${min} is greater than Max ${max}`)
    }
    if (totalNumber > max - min) {
        throw Error(`Cannot generate ${totalNumber} unique numbers in that small of a range`)
    }
    const numbers = Array(max - min)
        .fill(0)
        .map((_, index) => index + min)
    numbers.sort(() => Math.random() - 0.5)
    return numbers.slice(0, totalNumber)
}
