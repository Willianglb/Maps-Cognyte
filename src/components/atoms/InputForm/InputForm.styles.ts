import styled from 'styled-components';

export interface Properties {
    border?: string;
    flex?: number;
}

const Input = styled.input<Properties>`
    padding: 8px 16px;
    border: ${properties => properties.border || '2px solid #ccc'};
    border-radius: 16px;
    margin-bottom: 16px;
    width: 100%;
    box-sizing: border-box;
    color: #2c3e50;
    font-size: 16px;
    background-color: '#F5F5F5';
    &:disabled {
        background-color: #c9c9c8;
        color: #747474;
        cursor: not-allowed;
    }
    :focus {
        outline: none !important;
        border: 2px solid purple;
    }
`;

const Label = styled.label`
    color: black;
`

const ErrorText = styled.span`
    color: red;
    font-size: 0.8em;
    margin-left: 8px;
`

const InputFormStyles = styled.div<Properties>`
    flex: ${props => props.flex};
    width: 300px;
`

export {Input, Label, ErrorText, InputFormStyles};