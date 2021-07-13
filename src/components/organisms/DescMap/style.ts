import styled from 'styled-components'

export const Helper = styled.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    background-color: #6495ED;
    border: 1px solid black;
    width: 180px;
    color: black;
    font-size: smaller;
    padding: 10px;
    z-index: 9999;
    .label {
        display: flex;
        align-items: center;
        font-size: smaller;
    }
    .square {
        height: 10px;
        width: 10px;
        margin-right: 5px;
    }
        &:Hover {
            background-color: #4169E1;
        }
`

