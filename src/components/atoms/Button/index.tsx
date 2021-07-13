import React, { MouseEvent } from 'react';
import ButtonStyles from './Button.styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    invert?: boolean;
    children?: string | React.ReactElement;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: (e?: MouseEvent) => void;
    details?: boolean;
}

const Button = React.forwardRef((props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <ButtonStyles ref={ref} {...props}>
        {props.children}
    </ButtonStyles>
));

Button.defaultProps = {
    invert: false,
    details: false,
    type: 'button',
};

export default Button;
