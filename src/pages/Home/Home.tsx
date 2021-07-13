import React, {useEffect, useState} from 'react';
import CadastroCircle from '../../components/organisms/CadastroCircle/CadastroCircle';
import Map from '../../components/atoms/Map/Map';
import DescMap from '../../components/organisms/DescMap/DescMap';
import { MapStyle } from '../../components/atoms/MapStyle';
import BasePage from '../../components/organisms/BasePage/BasePage';
import Cadastro from '../../helpers/interfaces/Cadastro';

const Home: React.FC = () => {
    const [cadastros, setCadastros] = useState<Cadastro[]>([])

    useEffect(()=>{
        fetch('http://localhost:8080/cadastros').then(async response => {
            const data = await response.json()
            if(response.status === 200){
                setCadastros(data)
            } else {
                alert('Erro ao receber dados!')
            }
        })
    },[])

    return (
        <BasePage>
            <MapStyle>
                <DescMap />
                <Map>
                    {cadastros.map((cadastro, index) => {
                        return (
                            <CadastroCircle
                                key={`key_cadastro_${index}`}
                                position={cadastro.position} 
                                quantity={Number(cadastro.quantidade)}
                            />
                        )    
                    })}
                </Map>
            </MapStyle>
        </BasePage>
    )
}

export default Home;