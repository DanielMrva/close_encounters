import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import tileLayer from "../utils/tileLayer";
import { VIS_ENCOUNTERS } from "../utils/queries";
import { isConstValueNode } from "graphql";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faGhost, faDragon} from '@fortawesome/free-solid-svg-icons'

const mapPositions = [39.7392, -104.9903];

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
    // console.log(`make a call to the server with the bounds`, bounds);
    console.log(bounds.getNorth());
  }
}

const markerIcon = (type) => {
  let myIconURL = "";
  let myIconColor = "";

  const svgTemplate = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker">
  <path fill-opacity=".25" d="M16 32s1.427-9.585 3.761-12.025c4.595-4.805 8.685-.99 8.685-.99s4.044 3.964-.526 8.743C25.514 30.245 16 32 16 32z"/>
  <path fill="${myIconColor}" stroke="#fff" d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6a4 4 0 100 8 4 4 0 000-8z"/>
  </svg>`;


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
      myIconURL = svgTemplate;
      // myIconURL = DF;
      myIconColor = "#000000";
  }



  const otherSVG = faRocket;
  console.log(otherSVG)

  return new L.DivIcon({
    className: "test",
    html: otherSVG,
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
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

// lowlat: 39.0078, hilat: 40.7190, lowlng: -105.5732, hilng: -101.9901

const MapWrapper = () => {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState(null);
  const [variables, setVariables] = useState({
    lowlat: 39.0078,
    hilat: 40.719,
    lowlng: -105.5732,
    hilng: -101.99017,
  });

  const NewMapEvents = () => {
    const map = useMap();
    const bounds = map.getBounds();

    const bonundsList = {
      lowlat: bounds.getSouth(),
      hilat: bounds.getNorth(),
      lowlng: bounds.getWest(),
      hilng: bounds.getEast(),
    };
    useMapEvents({
      moveend: () => {
        setVariables(bonundsList);
        console.log(bonundsList);
      },
      zoomend: () => {
        setVariables(bonundsList);
        console.log(bonundsList);
      },
    });
  };

  // const Locator = ({ map }) => {
  //     // const [bounds, setBounds] = useState({})

  //     useEffect(() => {
  //             if (!map) return;

  //             map.locate().on("locationfound", function (e) {
  //             setPosition(e.latlng);
  //             map.flyTo(e.latlng, map.getZoom());
  //             const bounds = map.getBounds();
  //             console.log(bounds);
  //             const bonundsList = {
  //                 lowlat: bounds.getSouth(),
  //                 hilat: bounds.getNorth(),
  //                 lowlng: bounds.getWest(),
  //                 hilng: bounds.getEast(),
  //             }
  //             console.log(bonundsList)
  //             setVariables(bonundsList)
  //             // setBounds(bonundsList)
  //         })

  //     }, [map]);

  // }

  const { loading, data } = useQuery(VIS_ENCOUNTERS, {
    variables: variables,
    // variables: {lowlat: 39.0078, hilat: 40.7190, lowlng: -105.5732, hilng: -101.9901}
  });
  const encounters = data?.visencounters || [];
  // console.log(encounters);
  return (
    <MapContainer
      className="map"
      whenCreated={setMap}
      // whenReady={Locator}
      center={mapPositions}
      zoom={10}
    >
      {/* <VisibleBox/> */}
      <NewMapEvents map={map} />
      {/* <Locator map={map}/> */}

      <TileLayer {...tileLayer} />

      <MapMarkers data={encounters} />
    </MapContainer>
  );
};

export default MapWrapper;

// const VisibleBox = (map) => {

//     const bounds = map.getBounds();
//     console.log(bounds);
//     // const west = bounds.getWest();
//     // console.log(west)
//     const variables = {
//         lowlat: bounds.getSouth(),
//         hilat: bounds.getNorth(),
//         lowlng: bounds.getWest(),
//         hilng: bounds.getEast(),
//     }
//     console.log(variables)
// }

// const MapEvents = (map) => {
//     map.useMapEvents({
//       moveend: () => {
//           VisibleBox(map)
//         },
//       zoomend: () => {
//         VisibleBox(map)
//       },
//     });
//     return null;
// };
