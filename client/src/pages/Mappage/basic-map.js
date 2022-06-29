import React, { useState, useEffect } from "react";
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
import AddMarker from "../../components/MapComponents/AddMarker";
import SubmitModal from "../../components/MapComponents/MapSubmit";
import CustDivIcon from "../../components/MapComponents/DivMarker";
import MarkerIcon from "../../components/MapComponents/MarkerIcon";
import tileLayer from "../../utils/tileLayer";
import { VIS_ENCOUNTERS } from "../../utils/queries";
import Encountercardsingle from "../../components/Encountercard/Encountercardsingle";

// const mapPositions = [39.7392, -104.9903];

const MapMarkers = ({ data }) => {

  return data.map((item, index) => (
    <Marker
      key={index}
      icon={CustDivIcon(
        MarkerIcon({ encounterType: item.type, date: item.date })
      )}
      position={{ lat: item.lat, lng: item.lng }}
    >
      <Popup maxWidth={400} maxHeight={300}>
        <Encountercardsingle {...item} />
      </Popup>
    </Marker>
  ));
};


function Locator() {
  const [position, setPosition] = useState(null);
  // const [bbox, setBbox] = useState([]);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      console.log(position);
      map.flyTo(e.latlng, map.getZoom());
      // setBbox(e.bounds.toBBoxString().split(","));
      // console.log(bbox);
    })
  }, [map]);


}

const MapWrapper = () => {
  let lat = localStorage.getItem("lat");
  let lng = localStorage.getItem("lng");

  // let lat = 30;
  // let lng = 95;

  if (!lat) {
    lat = 35.7392;
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
  const [position, setPosition] = useState([lat, lng]);
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

      console.log("clicked position:", e.latlng);
      
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
      <NewMapEvents map={map} />
      <Locator/>

      <AddMarker onMapClick={onMapClick} newMarkPos={newMarkPos} />
      <SubmitModal
        newMarkPos={newMarkPos}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <MapMarkers data={encounters} />
      <TileLayer {...tileLayer} />
    </MapContainer>
  );
};

export default MapWrapper;
