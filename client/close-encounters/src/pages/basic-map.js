
import {React, useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import tileLayer from '../utils/tileLayer';
import { UFO, CZ, PN, DF } from '../mapassets';


const mockData = [
    {
        lat: 41.7190,
        lng: -100.1010,
        type: "UFO",
        title: "Cigar UFO Encounter",
        date: "10-21-2020"
    },
    {
        lat: 38.0078,
        lng: -110.4587,
        type: "PN",
        title: "Vision of my great grandfather",
        date: "6-19-1999"
    },
    {
        lat: 40.2213,
        lng: -109.5732,
        type: "CZ",
        title: "Unicorn Sighting",
        date: "12-24-2012"
    },
    {
        lat: 42.5109,
        lng: -102.1570,
        type: "UFO",
        title: "Silver Disk UFO signting",
        date: "7-4-1958"
    },
    {
        lat: 40.2268,
        lng: -101.9901,
        type: "UFO",
        title: "Little green men spotted in field",
        date: "2-14-2001"
    },
]

const markerIcon = (type) => {

    let myIconURL = "";
    let myIconColor = "";

    switch (type) {
        case "UFO":
            myIconURL = UFO;
            myIconColor = "#03fcec";
            break;
        case "CZ":
            myIconURL = CZ;
            myIconColor = "#e77ef2";
            break;
        case "PN":
            myIconURL = PN;
            myIconColor = "#55edb5"
            break;
        default: 
            myIconURL = DF;
            myIconColor = "#000000";
    }

    return new L.Icon({
        iconURL: myIconURL,
        iconSize: [40, 40],
        iconAnchor: [20, 20],       
        popupAnchor: [-5, -50],
    })
}

const MapWrapper = () => {
    const mapPositions = [39.7392, -104.9903];

    return (
        <MapContainer className="map" center={[mapPositions[0], mapPositions[1]]} zoom={10}>
            <TileLayer {...tileLayer}/>
        </MapContainer>
        
    )
};

export default MapWrapper;