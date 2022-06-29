import React, { useState, useEffect } from "react";
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
import AddMarker from "../components/MapSubmit/AddMarker";
import SubmitModal from "../components/MapSubmit/MapSubmit";
import tileLayer from "../utils/tileLayer";
import { VIS_ENCOUNTERS } from "../utils/queries";
import MarkerIcon from '../components/MapComponents/MarkerIcon'
import CustDivIcon from "../components/MapComponents/DivMarker";

const MapMarkers = ({ data }) => {
  return data.map((item, index) => (
    <Marker
      key={index}
      icon={CustDivIcon(MarkerIcon({encounterType:item.type,date:item.date}))}
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

function Locator() {
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
      setBbox(e.bounds.toBBoxString().split(","));
  });
}, [map]);

  return position === null ? null : (
    <Marker position={position} icon={CustDivIcon({iconType: "location-dot", iconColor:"#000000", iconStyle:"solid"})}>
      <Popup>
        You are here. <br />
        Map bbox: <br />
        <b>Southwest lng</b>: {bbox[0]} <br />
        <b>Southwest lat</b>: {bbox[1]} <br />
        <b>Northeast lng</b>: {bbox[2]} <br />
        <b>Northeast lat</b>: {bbox[3]}
      </Popup>
    </Marker>
  );
}

const MapWrapper = () => {
  let lat = localStorage.getItem("lat");
  let lng = localStorage.getItem("lng");

  if (!lat) {
    lat = 39.7392;
    lng = -104.9903;
  }

  const mapPositions = [lat, lng];
  const defaultVariables = {
    lowlat: 20,
    hilat: 70,
    lowlng: -110,
    hilng: -70,
  };
  const [map, setMap] = useState(null);
  // const [position, setPosition] = useState([lat, lng]);
  const [variables, setVariables] = useState(defaultVariables);
  const [showModal, setShowModal] = useState(false);
  const [newMarkPos, setNewMarkPos] = useState([0, 0]);

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

  const { loading, data } = useQuery(VIS_ENCOUNTERS, {
    variables: variables,
  });
  const encounters = data?.visencounters || [];

  const onMapClick = (e) => {
    if (e && e.latlng) {
      console.log(e.latlng);
      setNewMarkPos([e.latlng.lat, e.latlng.lng]);
      setShowModal(true);
    }
  };

  return (
    <MapContainer
      className="map"
      whenCreated={setMap}
      center={mapPositions}
      zoom={10}
    >
      <NewMapEvents />
      <Locator map={map} />
      <AddMarker onMapClick={onMapClick} newMarkPos={newMarkPos} />
      <SubmitModal newMarkPos={newMarkPos} setShowModal={setShowModal} showModal={showModal} />
      <MapMarkers data={encounters} />
      <TileLayer {...tileLayer} />
    </MapContainer>
  );
};

export default MapWrapper;
