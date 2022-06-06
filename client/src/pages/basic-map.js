import React from 'react';
import {useEffect, useState } from 'react';
import { MapContainer, Rectangle, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import tileLayer from '../utils/tileLayer';
// import { UFO, CZ, PN, DF } from '../mapassets';

const mapPositions = [39.7392, -104.9903];

function Locator() {
    const map = useMap()
    map.locate({setView: true, maxZoom: 12});
}


const mockData = [
    {
        lat: 40.7190,
        lng: -103.1010,
        type: "UFO",
        title: "Cigar UFO Encounter",
        date: "10-21-2020"
    },
    {
        lat: 39.0078,
        lng: -102.4587,
        type: "PN",
        title: "Vision of my great grandfather",
        date: "6-19-1999"
    },
    {
        lat: 40.2213,
        lng: -105.5732,
        type: "CZ",
        title: "Unicorn Sighting",
        date: "12-24-2012"
    },
    {
        lat: 40.5109,
        lng: -104.1570,
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

function makeACall(bounds, zoom, zoomThreshold = 8) {
    console.log(`current map zoom is ${zoom}`)
    if(zoom > zoomThreshold) {
        console.log(`make a call to the server with the bounds`, bounds)
    }
}

const MapEvents = () => {
    const map = useMapEvents({
        moveend: () => makeACall(map.getBounds(), map.getZoom()),
        zoomend: () => makeACall(map.getBounds(), map.getZoom())
    });
    return null;
}

//begins our markers from mockData
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

    return (
    <MapContainer 
        className='map'
        // whenCreated={Locator} 
        center={mapPositions} 
        zoom={10}>
            <MapEvents/>
            <TileLayer {...tileLayer}/>


            <MapMarkers data={mockData} />
            <Locator/>
            {/* <LocationMarker /> */}
            {/* <Legend map={map}/> */}
            {/* <Location map={map} /> */}



        </MapContainer>
        
    )
};

export default MapWrapper;

//scraps below:

// function LocationMarker() {
//     const [position, setPosition] = useState(null)
//     const map = useMapEvents({
//         click() {
//         map.locate()
//         },
//         locationfound(e) {
//         setPosition(e.latlng)
//         console.log(e.latlng)
//         map.flyTo(e.latlng, map.getZoom())
//         },
//     })

//     return position === null ? null : (
//         <Marker position={position}>
//         <Popup>You are here</Popup>
//         </Marker>
//     )
// }


// const colors = ["fe4848", "fe6c58", "fe9068", "feb478", "fed686"];
// const labels = ["2-12.5", "12.6-16.8", "16.9-20.9", "21-25.9", "26-plus"];

// const Legend = ({ map }) => {
//     useEffect(() => {
//       if (!map) return;
  
//     const legend = L.control({ position: "bottomright" });

//     const rows = [];
//     legend.onAdd = () => {
//     const div = L.DomUtil.create("div", "legend");
//     colors.map((color, index) => {
//         return rows.push(`
//             <div class="row">
//             <i style="background: #${color}"></i>${labels[index]}
//             </div>
//         `);
//     });
//     div.innerHTML = rows.join("");
//     return div;
//     };

//     legend.addTo(map);
// }, [map]);

// return null;
// };

// function getRandomColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`.toString();
// }

// const SetRentacle = ({ bounds }) => {
//         return bounds.map((bound, index) => (
//         <Rectangle 
//             key={index}
//             bounds={bound}
//             color={getRandomColor()}
//             weight={10}
//             fillOpacity={0.1} />
//     ));
// }

// function contentText(getBounds) {
// const { _northEast, _southWest } = getBounds;
// return `SouthWest: ${_southWest}, NorthEast: ${_northEast}`;
// }

// const Location = ({ map }) => {
//     const [bounds, setBounds] =
//     useState([])

//     useEffect(() => {
//         if (!map) return;

//         const info = L.DomUtil.create('div', 'legend');

//         const position = L.Control.extend({
//             options: {
//                 position: 'bottomleft'
//             },

//             onAdd: function () {
//                 info.innerHTML = contentText(map.getBounds());
//                 return info;
//             }
//         })

//         map.addControl(new position());

//         map.on('moveend zoomend', () => {
//             const bounds = map.getBounds();
//             info.textContent = 
//             contentText(bounds);
//             setBounds(b => [...b, bounds])
//         });
//     }, [map])

//     return bounds?.length <= 0 ? <SetRentacle bounds={bounds} />
//     : null;
// }



// function getRandomColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`.toString();
//     }
    
//     const SetRentacle = ({ bounds }) => {
//     return bounds.map((bound, index) => (
//         <Rectangle
//         key={index}
//         bounds={bound}
//         color={getRandomColor()}
//         weight={10}
//         fillOpacity={0.1} />
//     ));
//     }
    
//     function contentText(getBounds) {
//     const { _northEast, _southWest } = getBounds;
//     return `SouthWest: ${_southWest}, NorthEast: ${_northEast}`;
//     }
    
//     const Location = ({ map }) => {
//     const [bounds, setBounds] = useState([])
    
//     useEffect(() => {
//         if (!map) return;
    
//         const info = L.DomUtil.create('div', 'legend');
    
//         const position = L.Control.extend({
//         options: {
//             position: 'bottomleft'
//         },
    
//         onAdd: function () {
//             info.innerHTML = contentText(map.getBounds());
//             return info;
//         }
//         })
    
//         map.addControl(new position());
    
//         map.on('moveend zoomend', () => {
//         const bounds = map.getBounds();
//         info.textContent = contentText(bounds);
//         setBounds(b => [...b, bounds])
//         });
    
//     }, [map])
    
//     return bounds?.length <= 0
//         ? <SetRentacle bounds={bounds} />
//         : null;
//     }
    