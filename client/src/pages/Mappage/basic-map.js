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

  // const { loading, data } = useQuery(VIS_ENCOUNTERS, {
  //   variables: variables,
  // });
  // const encounters = data?.visencounters || [];

  return (
    <MapContainer
      className="map"
      whenCreated={Locator}
      center={mapPositions}
      zoom={10}
    >
      <NewMapEvents map={map} />
      <Locator map={map} />
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
