import React from 'react';
import { HeaderStyles, HeaderItens } from './Header.styles';
import Logo from '../../atoms/Logo';

const Header: React.FC = () => {
    return (
        <HeaderStyles>
            <HeaderItens to='/'>Home</HeaderItens>
            <Logo />
            <HeaderItens to='/new'>Cadastrar</HeaderItens>
        </HeaderStyles>
    )
}

export default Header;