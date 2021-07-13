import React from 'react'
import Header from '../Header/Header'
import {Main} from './style'

const BasePage: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
        </>
    )
}

export default BasePage;