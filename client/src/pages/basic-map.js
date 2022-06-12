import React, { useState, useEffect} from "react";
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
import L from "leaflet";
import AddMarker from "../components/MapSubmit/AddMarker";
import SubmitModal from "../components/MapSubmit/MapSubmit";
import tileLayer from "../utils/tileLayer";
import { VIS_ENCOUNTERS } from "../utils/queries";

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
      <Popup maxWidth={400} maxHeight={300}>
        <div className="card-page">
          <div className="card-container">
            <div className="card-top-flex">
              <div className="card-header-flex">
                <div className="title-card">{item.title}</div>
                <div className="username-card">{item.encounterUser}</div>
                <div className="location-card">
                  Lat: {item.lat} Lng: {item.lng}
                </div>
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
  const [newMarkPos, setNewMarkPos] = useState();
  const [showModal, setShowModal] = useState(false);

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
      dragend: () => {
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

  const onMapClick = (e) => {
    console.log("rendering");
    if (e && e.latlng) {
      console.log(e.latlng);
      setNewMarkPos([e.latlng.lat, e.latlng.lng]);
      setShowModal(true);
    }
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
      {/* <AddMarker onMapClick={onMapClick} newMarkPos={newMarkPos} />
      <SubmitModal
        newMarkPos={newMarkPos}
        setShowModal={setShowModal}
        showModal={showModal}
      /> */}
      <MapMarkers data={encounters} />
      <TileLayer {...tileLayer} />
    </MapContainer>
  );
};

export default MapWrapper;
