export abstract class Operation {
    constructor(public text: string) {}

    public abstract execute(numbers: number[]): number
}

export class AddOperation {
    constructor(public text: string) {}

    public execute = (numbers: number[]): number => numbers.reduce((sum, val) => sum + val, 0)
}

export class SubtractOperation {
    constructor(public text: string) {}

    public execute = (numbers: number[]): number =>
        numbers.length ? numbers.reduce((sum, val) => sum - val) : 0
}

export const SUPPORTED_OPERATIONS = [new AddOperation('+'), new SubtractOperation('-')]
