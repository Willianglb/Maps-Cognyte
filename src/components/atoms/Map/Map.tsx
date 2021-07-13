import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

interface MapProps {
    center?: [number, number]
}

const Map: React.FC<MapProps> = ({center = [-27.597, -48.549] , children}) => {
    return (
        <MapContainer style={{ width: "100%", height: "100%" }} center={center} zoom={12} scrollWheelZoom={true}>
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {children}
        </MapContainer>
    )
}

export default Map;