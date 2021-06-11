export const getDisplayText = (result: number | undefined, selectedNumbers: number[]): string => {
    if (result != null) {
        return result.toString()
    }
    if (selectedNumbers.length) {
        return `[${selectedNumbers.map((number) => ` ${number} `)}]`
    }
    return 'Choose Numbers'
}
