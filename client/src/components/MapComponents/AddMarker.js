import React from "react";
import {
  Marker,
  useMapEvents,
} from "react-leaflet";
import CustDivIcon from "./DivMarker";

const AddMarker = ({ onMapClick, newMarkPos }) => {
  useMapEvents({
    dblclick: (e) => onMapClick(e),
  });
  return ( <Marker icon={CustDivIcon({iconType: "location-dot", iconColor:"#000000", iconStyle:"solid"})} key={newMarkPos} position={newMarkPos} ></Marker> );
};

export default AddMarker;
