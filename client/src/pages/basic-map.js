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

const markerIcon = (category) => {
  let iconColor = "";
  let iconType = "";

  switch (category) {
    case "Extraterrestrial":
      iconType = "rocket";
      iconColor = "#03fcec";
      break;
    case "Zoological":
      iconType = "dragon";
      iconColor = "#e77ef2";
      break;
    case "Paranormal":
      iconType = "ghost";
      iconColor = "#55edb5";
      break;
    default:
      iconType = "location-dot";
      iconColor = "#000000";
  }



  return new L.DivIcon({
    className: "test",
    html: `<i class="fa-solid fa-${iconType} fa-xl" style="backgroundcolor:${iconColor};!important"></i>`,
    iconSize: [30, 30],
    iconAnchor: [15, 31],
    popupAnchor: [0, -32],
  });
};

const MapMarkers = ({ data }) => {
  return data.map((item, index) => (
    <Marker
      key={index}
      icon={markerIcon(item.category)}
      position={{ lat: item.lat, lng: item.lng }}
    >
      <Popup maxWidth={400}>
        <div className="card-page">
          <div className="card-container">
            <div className="card-top-flex">
              <div className="user-icon">
                {/* <div className="pic-header-flex">
                  <img className="profile-pic" src={profileImage} alt="user" />
                </div> */}
              </div>
              <div className="card-header-flex">
                <div className="title-card">{item.title}</div>
                <div className="username-card">Zimzam21098</div>
                <div className="location-card">Boulder, CO</div>
                <div className="date-card">{item.date}</div>
              </div>
            </div>
            <div className="description-flex">
              <p>
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  ));
};


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
