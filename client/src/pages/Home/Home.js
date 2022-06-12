import "./Home.css";
// import homeImage from "../../images/curve-shelf-mobile.png";
import homeImage1 from "../../images/curve-shelf-crop.png";

import Encountercard from "../../components/Encountercard/Encountercard";

export default function Home() {
  return (
    <div>
      <div className="heading-container">
        <h2>
          TOGETHER WE CAN MAKE THE UNEXPLAINED AND THE UNIMAGINABLE...
          UNDENIABLE
        </h2>
        <div className="encountercard-home">
          <h4 style={{ fontWeight: "300" }}>Recent Sightings</h4>
          <Encountercard
            quantityDisplay={40}
            viewableStyleDescription="not-viewable"
          />
        </div>
      </div>

      <div className="image-container">
        <img className="home-image" src={homeImage1} alt="Curvy Shelf" />
      </div>
      {/* <h6>blank encounters since June</h6> */}
    </div>
  );
}
