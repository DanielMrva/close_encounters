import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
  Tooltip,
} from "react-leaflet";
import L, { bounds } from "leaflet";
import AddMarker from "../components/MapSubmit/AddMarker";
import SubmitModal from "../components/MapSubmit/MapSubmit";
import tileLayer from "../utils/tileLayer";
import { VIS_ENCOUNTERS } from "../utils/queries";
import {
  ModalProvider,
  ModalContext,
  ModalUpdateContext,
} from "../contexts/modalContext";
import {
  NewMarkerProvider,
  NewMarkerContext,
  NewMarkerUpdateContext,
} from "../contexts/newMarkerContext";

const mapPositions = [39.7392, -104.9903];

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
    html: `<i class="fa-solid fa-${iconType} fa-xl" style="color:${iconColor};"></i>`,
    iconSize: [30, 30],
    iconAnchor: [15, 31],
    popupAnchor: [0, -32],
  });
};

const MapMarkers = ({ data }) => {
  return data.map((item, index) => (
    <Marker
      key={index}
      icon={markerIcon(item.type)}
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
                <div className="username-card">{item.encounterUser}</div>
                <div className="location-card">Boulder, CO</div>
                <div className="date-card">{item.date}</div>
              </div>
            </div>
            <div className="description-flex">
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  ));
};

const MapWrapper = () => {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState([39.7392, -104.9903]);
  const [variables, setVariables] = useState({});
  // const [showModal, setShowModal] = useState(false);
  // const [newMarkPos, setNewMarkPos] = useState([0,0])

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
      },
      zoomend: () => {
        setVariables(bonundsList);
      },
    });
  };

  const Locator = ({ map }) => {
    useEffect(() => {
      if (!map) return;

      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        console.log(position);
        map.flyTo(e.latlng, map.getZoom());
        const bounds = map.getBounds();
        console.log(bounds);
        const bonundsList = {
          lowlat: bounds.getSouth(),
          hilat: bounds.getNorth(),
          lowlng: bounds.getWest(),
          hilng: bounds.getEast(),
        };
        console.log(bonundsList);
        setVariables(bonundsList);
      });
    }, [map]);
  };

  const { loading, data } = useQuery(VIS_ENCOUNTERS, {
    variables: variables,
  });
  const encounters = data?.visencounters || [];

  return (
    <MapContainer
      className="map"
      whenCreated={setMap}
      center={mapPositions}
      zoom={10}
    >
      <NewMapEvents map={map} />
      <Locator map={map} />

      <MapMarkers data={encounters} />
      <TileLayer {...tileLayer} />
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

// const Bounder = () => {
//   const map = useMap();
//   const bounds = map.getBounds();
//   const bonundsList = {
//     lowlat: bounds.getSouth(),
//     hilat: bounds.getNorth(),
//     lowlng: bounds.getWest(),
//     hilng: bounds.getEast(),
//   };
//   setVariables(bonundsList);

// }

// const ShowMarkers = ({ mapContainer, markers }) => {
//   return markers.map((marker, index) => {
//     return <Marker
//       key={index}
//       uniceid={index}
//       position={marker}
//       draggable={true}
//       eventHandlers={{
//         moveend(e) {
//           const { lat, lng } = e.target.getLatLng();
//         }
//       }}
//     >
//       <Popup>
//         <button onClick={() => console.log(`click`)}>click me</button>
//       </Popup>
//     </Marker>
//   })
// }

// const DroppedMarker = ({ map }) =>  {
//   const [marker, setMarker] = useState([])

//   useMapEvents({
//     click: () => {

//     }
//   })

//   if(marker.length) {
//     return (
//       <ShowMarkers
//         mapContainer={map}
//         markers={marker} />
//     )
//   }
// }

// const [clickedPos, setClickedPos] = useState([])

// useEffect(() => {
//   navigator.geolocation.getCurrentPosition(position => {
//     const { lat, lng } = position.coords;
//     setPosition([lat, lng]);
//   });
// }, []);

// const DroppedMarker = () => {
//   const map = useMapEvents({
//     click(e) {
//       setClickedPos([
//         e.latlng.lat,
//         e.latlng.lng
//       ]);
//     },
//   })

//   return (
//     clickedPos ?
//     <Marker
//     key={clickedPos[0]}
//     position={clickedPos}

//     />
//     :null
//   )
// }
