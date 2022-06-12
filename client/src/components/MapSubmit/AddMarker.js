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
  Tooltip,
} from "react-leaflet";
import L, { LatLng, LatLngExpression } from "leaflet";
import tileLayer from "../../utils/tileLayer";
import MapSubmit from "./MapSubmit";

const AddMarker = ({ onMapClick, newMarkPos }) => {
  useMapEvents({
    click: (e) => onMapClick(e),
  });
  // console.log(newMarkPos);
  return <Marker key={newMarkPos} position={newMarkPos}></Marker>;
};

export default AddMarker;
