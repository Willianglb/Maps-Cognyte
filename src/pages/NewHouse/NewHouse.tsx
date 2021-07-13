import React, {useState, useContext} from 'react';
import * as S from './NewHouse.styles';
import { Marker, Popup } from 'react-leaflet';
import {useHistory} from 'react-router-dom';
import { appContext } from '../../helpers/Store/Context';
import Button from '../../components/atoms/Button';
import InputForm from '../../components/atoms/InputForm/index';
import Map from '../../components/atoms/Map/Map';
import MapClicker from '../../components/atoms/MapClicker/MapClicker';
import { MapStyle } from '../../components/atoms/MapStyle';
import BasePage from '../../components/organisms/BasePage/BasePage';
import Cadastro from '../../helpers/interfaces/Cadastro';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    cep: yup.number().min(6).required("O campo cep é obrigatório."),
    number: yup.number().min(1).required("O campo número é obrigatório."),
    moradores: yup.number().min(1).required("O campo moradores é obrigatório.")
});

const NewHouse: React.FC = () => {
    const { cep, number, moradores, setCep, setNumber, setMoradores} = useContext(appContext);
    const history = useHistory()
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [position, setPositions] = useState<[number, number]>()
    const setPosition = (latLong: {lat: number, lng: number}) => {
        setLat(String(latLong.lat))
        setLong(String(latLong.lng))
        setPositions([latLong.lat, latLong.lng])
    }

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    async function onSubmitForm(event: any) {
        handleSubmit((d) => console.log(d));
        event.preventDefault();
    
        if (lat && long) {
            const newPoint: Cadastro = {
                position: [Number(lat), Number(long)],
                cep: cep,
                numero: number,
                quantidade: moradores
            }
            console.log(newPoint)
            const body = JSON.stringify(newPoint)
            fetch('http://localhost:8080/cadastros', {
                method: 'POST',
                headers: new Headers({
                    'Content-type': 'application/json',
                }),
                body: body,
            })
            .then(response => {
                if(response.ok){
                    alert('Cadastro realizado com sucesso')
                    history.push('/')
                } else {
                    alert('Marque a localidade!')
                }
            })
        } else {
            alert('Formulário incompleto!')
        }
    }

    return (
        <BasePage>
            <S.Form onSubmit={onSubmitForm}>
                <S.OneCollum>
                    <InputForm
                        {...register('cep')}
                        config={{
                            label: 'CEP',
                            type: 'text',
                            placeholder: 'xxxxx-xxx',
                            name: 'cep',
                            value: cep
                        }}
                        onChange={(event: any) => {
                            setCep(event.target.value);
                            register('cep');
                        }}
                        data-testid='Input'
                    />
                    {errors.cep && (
                        <div className='errorBox'>
                            <label className='errorLabel'>{errors.cep.message}</label>
                        </div>
                    )}
                        
                    <InputForm
                        {...register('number')}
                        config={{
                            label: 'Número',
                            type: 'number',
                            placeholder: 'xx',
                            name: 'number',
                            value: number,
                        }}
                        onChange={(event: any) => {
                            setNumber(event.target.value);
                        }}
                    />
                    {errors.number && (
                        <div className='errorBox'>
                            <label className='errorLabel'>{errors.number.message}</label>
                        </div>
                    )}

                    <InputForm
                        {...register('moradores')}
                        config={{
                            label: 'Quantidade de moradores',
                            type: 'number',
                            placeholder: 'x',
                            name: 'moradores',
                            value: moradores,
                        }}
                        onChange={(event: any) => {
                            setMoradores(event.target.value);
                        }}
                    />
                    {errors.moradores && (
                        <div className='errorBox'>
                            <label className='errorLabel'>{errors.moradores.message}</label>
                        </div>
                    )}
                        
                    <InputForm
                        config={{
                            label: 'Latitude',
                            type: 'number',
                            placeholder: 'xxxxxx',
                            name: 'lat',
                            value: lat,
                            disabled: true
                        }}
                        onChange={(event: any) => {
                            setLat(event.target.value);
                        }}
                    />

                    <InputForm
                        config={{
                            label: 'Lontitude',
                            type: 'number',
                            placeholder: 'xxxxx',
                            name: 'Longitude',
                            value: long,
                            disabled: true
                        }}
                        onChange={(event: any) => {
                            setLong(event.target.value);
                        }}
                    />  
                    <Button type='submit' data-testid='botao'>Adicionar ao mapa!</Button>
                </S.OneCollum>
                <S.TwoCollum>
                    <MapStyle>
                        <Map>
                            <MapClicker setPosition={setPosition} />
                            {position && (
                                <Marker position={position}>
                                <Popup>
                                    Cadastrar aqui.
                                </Popup>
                            </Marker>
                            )}
                        </Map>
                    </MapStyle>
                </S.TwoCollum>
            </S.Form>
        </BasePage>
    )
}

export default NewHouse;