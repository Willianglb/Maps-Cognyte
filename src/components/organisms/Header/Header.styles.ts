import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyles = styled.nav`
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #4169E1;
`

export const HeaderItens = styled(Link)`
    color: white;
    &:hover {
        color: #dddddd;
    }
`