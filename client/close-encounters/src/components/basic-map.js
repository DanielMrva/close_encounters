import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import tileLayer from '../utils/tileLayer';

const MapWrapper = () => {
    return (
        <MapContainer center={[50.5, 30.5]} zoom={13} scrollWheelZoom={true}>
                <TileLayer {...tileLayer}/>
        </MapContainer>
        
    )
};

export default MapWrapper;