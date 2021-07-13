import React from 'react';
import * as S from './Logo.styles';
import img from '../../../helpers/img/Logo.png';

const Logo: React.FC = () => {
    return (
        <S.Logo>
            <img src={img} alt='Logo' style={{ width: "70px" }} />
        </S.Logo>
    )
}

export default Logo;
