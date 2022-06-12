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
import CustDivIcon from "./DivMarker";
import MarkerIcon from "./MarkerIcon";


const AddMarker = ({ onMapClick, newMarkPos }) => {
  useMapEvents({
    click: (e) => onMapClick(e),
  });
  // console.log(newMarkPos);
  return ( <Marker icon={CustDivIcon(MarkerIcon("default"))} key={newMarkPos} position={newMarkPos} ></Marker> );
};

export default AddMarker;
