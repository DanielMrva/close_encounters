import React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import tileLayer from '../utils/tileLayer';
import { VIS_ENCOUNTERS } from '../utils/queries';

const mapPositions = [39.7392, -104.9903];

function Locator() {
  const map = useMap();
  map.locate({ setView: true, maxZoom: 12 });
  let bounds = map.getBounds();
  let zoom = map.getZoom();
  makeACall(bounds, zoom);
}

const mockData = [
  {
    lat: 40.719,
    lng: -103.101,
    type: "UFO",
    title: "Cigar UFO Encounter",
    date: "10-21-2020",
  },
  {
    lat: 39.0078,
    lng: -102.4587,
    type: "PN",
    title: "Vision of my great grandfather",
    date: "6-19-1999",
  },
  {
    lat: 40.2213,
    lng: -105.5732,
    type: "CZ",
    title: "Unicorn Sighting",
    date: "12-24-2012",
  },
  {
    lat: 40.5109,
    lng: -104.157,
    type: "UFO",
    title: "Silver Disk UFO signting",
    date: "7-4-1958",
  },
  {
    lat: 40.2268,
    lng: -101.9901,
    type: "UFO",
    title: "Little green men spotted in field",
    date: "2-14-2001",
  },
];

function makeACall(bounds, zoom, zoomThreshold = 8) {
  console.log(`current map zoom is ${zoom}`);
  if (zoom > zoomThreshold) {
    console.log(`make a call to the server with the bounds`, bounds);
  }
}

const MapEvents = () => {
  const map = useMapEvents({
    moveend: () => makeACall(map.getBounds(), map.getZoom()),
    zoomend: () => makeACall(map.getBounds(), map.getZoom()),
  });
  return null;
};

const VisibleBox = () => {
    const map = useMap();
    const lowlat = map.getSouth();
    const hilat =map.getNorth();
    const lowlng = map.getEast();
    const hilng = map.getWest();
    const variables ={lowlat: lowlat, hilat: hilat, lowlng: lowlng, hilng: hilng}
    return variables
}

const markerIcon = (type) => {
    // let myIconURL = "";
    let myIconColor = "";
  
    switch (type) {
      case "UFO":
        // myIconURL = '../mapassets/ufo-svgrepo-com.svg'
        // myIconURL = UFO;
        myIconColor = "#03fcec";
        break;
      case "CZ":
        // myIconURL = '../mapassets/unicorn-svgrepo-com.svg'
        // myIconURL = CZ;
        myIconColor = "#e77ef2";
        break;
      case "PN":
        // myIconURL = '../mapassets/ghost-svgrepo-com.svg'
        // myIconURL = PN;
        myIconColor = "#55edb5";
        break;
      default:
        // myIconURL =
        // myIconURL = DF;
        myIconColor = "#000000";
    }
  
    const svgTemplate = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker">
      <path fill-opacity=".25" d="M16 32s1.427-9.585 3.761-12.025c4.595-4.805 8.685-.99 8.685-.99s4.044 3.964-.526 8.743C25.514 30.245 16 32 16 32z"/>
      <path fill="${myIconColor}" stroke="#fff" d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6a4 4 0 100 8 4 4 0 000-8z"/>
      </svg>`;
  
    return new L.DivIcon({
      className: "test",
      html: svgTemplate,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [-5, -50],
    });
};

const MapMarkers = ({ data }) => {
    return data.map((item, index) => (
        <Marker
            key={index}
            icon={markerIcon(item.type)}
            position={{ lat: item.lat, lng: item.lng }}
        >
            <Popup>{item.type}</Popup>

        </Marker>
    ));
};


const MapWrapper = () => {
    const variables = VisibleBox();
    const { loading, data } = useQuery(VIS_ENCOUNTERS, {
        variables: {variables},
        // variables: {lowlat: 39.0078, hilat: 40.7190, lowlng: -105.5732, hilng: -101.9901},
    });
    const encounters = data?.visencounters || [];

    if(loading) {
        return <h2>loading...</h2>;
    }
    return (
    
        <MapContainer 
            className='map'
            // whenCreated={Locator} 
            center={mapPositions} 
            zoom={10}>
                <VisibleBox/>
                <MapEvents/>
                <TileLayer {...tileLayer}/>


                <MapMarkers data={encounters} />
                <Locator/>




        </MapContainer>
        
    )
};

export default MapWrapper;
