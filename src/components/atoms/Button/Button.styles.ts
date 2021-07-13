import styled from 'styled-components';
import { ButtonProps } from './index';

const ButtonStyles = styled.button<ButtonProps>`
    background-color: blue;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-size: 10px;
    font-weight: 100;
    overflow: hidden;
    position: relative;
    padding: 10px;
    transition: all 0.3s;

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        background: radial-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
        opacity: 0;
        border-radius: 50%;
        transform: scale(1, 1) translate(-50%);
        transform-origin: 50% 50%;
    }

    &:focus:not(:active)::after {
        animation: ripple 0.5s ease-out;
    }

    &:hover {
        background: greenyellow;
        color: black;
        border: 1px;
    }

    &:disabled {
        background: grey;
        color: white
        cursor: auto;
        &:hover {
            background: black;
        }
    }

    @keyframes ripple {
        0% {
            transform: scale(0, 0);
            opacity: 1;
        }

        20% {
            transform: scale(25, 25);
            opacity: 1;
        }

        100% {
            opacity: 0;
            transform: scale(40, 40);
        }
    }
`;

export default ButtonStyles;
