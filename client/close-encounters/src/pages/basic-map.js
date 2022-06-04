
import React from 'react';
import {useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import tileLayer from '../utils/tileLayer';
// import { UFO, CZ, PN, DF } from '../mapassets';


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
];

const colors = ["fe4848", "fe6c58", "fe9068", "feb478", "fed686"];
const labels = ["2-12.5", "12.6-16.8", "16.9-20.9", "21-25.9", "26-plus"];

const Legend = ({ map }) => {
    useEffect(() => {
      if (!map) return;
  
      const legend = L.control({ position: "bottomright" });
  
      const rows = [];
      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "legend");
        colors.map((color, index) => {
          return rows.push(`
              <div class="row">
                <i style="background: #${color}"></i>${labels[index]}
              </div>
            `);
        });
        div.innerHTML = rows.join("");
        return div;
      };
  
      legend.addTo(map);
    }, [map]);
  
    return null;
  };

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
            myIconColor = "#55edb5"
            break;
        default: 
            // myIconURL = 
            // myIconURL = DF;
            myIconColor = "#000000";
    }

    const svgTemplate = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker">
    <path fill-opacity=".25" d="M16 32s1.427-9.585 3.761-12.025c4.595-4.805 8.685-.99 8.685-.99s4.044 3.964-.526 8.743C25.514 30.245 16 32 16 32z"/>
    <path fill="${myIconColor}" stroke="#fff" d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6a4 4 0 100 8 4 4 0 000-8z"/>
    </svg>`

    return new L.DivIcon({
        className: "test",
        html: svgTemplate,
        iconSize: [40, 40],
        iconAnchor: [20, 20],       
        popupAnchor: [-5, -50],
    });
}

const MapMarkers = ({ data }) => {
    return data.map((item, index) => (
        <Marker 
        key={index}
        icon={markerIcon(item.type)}
        position={{ lat: item.lat, lng: item.lng }}
        >
          <Popup>{item.type}</Popup>  
        </Marker>
    ))
}

const MapWrapper = () => {
    const [map, setMap] = useState(null);

    const mapPositions = [39.7392, -104.9903];

    return (
        <MapContainer className="map" whenCreated={setMap} center={[mapPositions[0], mapPositions[1]]} zoom={10}>
            <TileLayer {...tileLayer}/>

            <MapMarkers data={mockData} />

            <Legend map={map}/>

        </MapContainer>
        
    )
};

export default MapWrapper;