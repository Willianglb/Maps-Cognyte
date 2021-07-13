import React from 'react';
import { FieldError } from 'react-hook-form';
import * as S from './InputForm.styles';
 
type Config = {
    type?: string;
    id?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    value?: any;
    ref?: any;
    minLenght?: number;
    maxLenght?: number;
    disabled?: boolean;
    defaultValue?: string;
    errors?: FieldError;
};

export interface InputFormProps {
    config?: Config;
    children?: React.ReactNode;
    hasError?: boolean;
    errorText?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
}

const InputForm = React.forwardRef((props: InputFormProps, ref: any) => {
    const { config, children, onChange, onBlur, hasError, errorText } = props;

    return (
        <S.InputFormStyles {...props} {...props.config} className='inputForm'>
            <S.Label htmlFor={props.config?.id}>
                {props.config?.label}
            </S.Label>
            {hasError && <S.ErrorText>{errorText}</S.ErrorText>}
            <div>
                <S.Input {...props.config} {...config} onChange={onChange} onBlur={onBlur} ref={ref} />
            </div>
            {children}
        </S.InputFormStyles>
    );
});
 
export default InputForm;