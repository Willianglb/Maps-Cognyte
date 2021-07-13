import React from 'react'
import {Helper} from './style'

const DescMap: React.FC = () => {
    return (
        <Helper>
            <span>
                <div className="label">
                    <div className="square" style={{backgroundColor: 'yellow'}}></div>
                    1 morador
                </div>
                <div className="label">
                    <div className="square" style={{backgroundColor: 'orange'}}></div>
                    Entre 2 e 3 moradores
                </div>
                <div className="label">
                    <div className="square" style={{backgroundColor: 'red'}}></div>
                    Entre 4 e 5 moradores
                </div>
                <div className="label">
                    <div className="square" style={{backgroundColor: 'darkred'}}></div>
                    Mais de 5 moradores
                </div>
            </span>
        </Helper>
    )
}

export default DescMap;