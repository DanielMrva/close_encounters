import "./Mappage.css";
import MapWrapper from "./basic-map";

export default function Map() {
  return (
    <div>
      <div className="map-page-container">
        <div className="map-wrapper-container">
          <MapWrapper />
        </div>
      </div>
    </div>
  );
}
