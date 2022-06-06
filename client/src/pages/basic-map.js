import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import tileLayer from "../utils/tileLayer";

const MapWrapper = () => {
  const mapPositions = [39.7392, -104.9903];

  return (
    <MapContainer
      className="map"
      center={[mapPositions[0], mapPositions[1]]}
      zoom={10}
    >
      <TileLayer {...tileLayer} />
    </MapContainer>
  );
};

export default MapWrapper;
