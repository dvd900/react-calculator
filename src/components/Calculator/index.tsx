import React, { useState, useEffect } from 'react'
import {
    CalculatorWrap,
    Header,
    ResultsDisplay,
    NumberButtonGrid,
    NumberButton,
    OperationsRow,
} from './styled'
import Button from '../../components/Button'
import { Operation, SUPPORTED_OPERATIONS } from '../../classes/operations'
import { ButtonVariant } from '../../enums/button-variants'
import { getDisplayText } from '../../utils/display-text'

interface Props {
    operations?: Operation[]
    numbers: number[]
}

const Calculator = ({ operations = SUPPORTED_OPERATIONS, numbers }: Props) => {
    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([])

    useEffect(() => {
        setSelectedNumbers([])
        return () => {}
    }, [numbers])

    const [result, setResult] = useState<number>()

    const operationClicked = (operation: Operation) => {
        setResult(operation.execute(selectedNumbers))
        setSelectedNumbers([])
    }

    const numberClicked = (clickedNumber: number): void => {
        if (!!result) {
            setResult(undefined)
        }
        //if number selected, remove, else add number to selectednumbers
        let newSelectedNumbers = selectedNumbers.includes(clickedNumber)
            ? selectedNumbers.filter((number) => clickedNumber != number)
            : [...selectedNumbers, clickedNumber]
        setSelectedNumbers(newSelectedNumbers)
    }

    return (
        <CalculatorWrap>
            <Header>☁️ Cloud Computer ☁️</Header>
            <ResultsDisplay>{getDisplayText(result, selectedNumbers)}</ResultsDisplay>
            <NumberButtonGrid>
                {numbers.map((number) => (
                    <NumberButton key={number}>
                        <Button
                            key={number}
                            variant={ButtonVariant.NUMBER}
                            text={number.toString()}
                            isSelected={selectedNumbers.includes(number)}
                            onClick={() => {
                                numberClicked(number)
                            }}
                        />
                    </NumberButton>
                ))}
            </NumberButtonGrid>
            <OperationsRow>
                {operations.map((operation) => (
                    <Button
                        key={operation.text}
                        variant={ButtonVariant.OPERATION}
                        text={operation.text}
                        isDisabled={selectedNumbers.length < 1}
                        onClick={() => {
                            operationClicked(operation)
                        }}
                    />
                ))}
            </OperationsRow>
        </CalculatorWrap>
    )
}
export default Calculator
