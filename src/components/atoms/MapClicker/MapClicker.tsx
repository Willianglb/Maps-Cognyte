import React from 'react'
import { useMapEvents } from 'react-leaflet'


interface ClickerProps {
    setPosition: (latLong: {lat: number, lng: number}) => void;
}
const MapClicker: React.FC<ClickerProps> = ({setPosition}) => {
    const map = useMapEvents({
        click: (location) => {
        setPosition(location.latlng)
        },
      })
    return null;
}

export default MapClicker