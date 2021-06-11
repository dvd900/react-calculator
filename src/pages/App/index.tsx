import React from 'react'
import Calculator from '../../components/Calculator'
import { SUPPORTED_OPERATIONS } from '../../classes/operations'
import { generateUniqueNumbers } from '../../utils/number-gen'
import { GlobalStyle } from '../../components/App/styled'
const App = () => {
    return (
        <>
            <Calculator
                numbers={generateUniqueNumbers(9, 1, 99)}
                operations={SUPPORTED_OPERATIONS}
            />
            <GlobalStyle />
        </>
    )
}

export default App
