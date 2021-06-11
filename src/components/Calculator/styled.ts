import styled from 'styled-components'
import { COLOR3, COLOR4 } from '../../styles/colors'
import { mdText, lgText } from '../../styles/text'
export const Header = styled.div`
  text-align: center;
  ${lgText}
  border: 2px solid #000000;
  color: #435069;
  margin: 1rem auto;
  width 90%;
`
export const ResultsDisplay = styled.div`
    background-color: ${COLOR4};
    ${mdText}
    margin: 1rem auto;
    margin-bottom: 1rem;
    border: 4px double #5f6b59;
    height: 6rem;
    width: 90%;
    padding-right: 1rem;
    display: flex;
    flex-flow: row-reverse;
    align-items: center;
`
export const CalculatorWrap = styled.div`
    background-color: ${COLOR3};
    border: 2px solid grey;
    width: 600px;
    height: 800px;
    margin: 1rem auto;
`
export const NumberButtonGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 50%;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 3rem;
`
export const NumberButton = styled.div`
    margin: 0 auto;
    flex: 1 1 30%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const OperationsRow = styled.div`
    display: flex;
    justify-content: space-around;
`
