import "./Home.css";
// import homeImage from "../../images/curve-shelf-mobile.png";
import homeImage1 from "../../images/curve-shelf-crop.png";

import Encountercard from "../../components/Encountercard/Encountercard";
// import Openup from "../../components/Openup";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const props = useSpring({
    loop: true,
    from: { width: "20vw", alignItems: "center", justifyContent: "center" },
    config: { duration: 8000 },
    to: { width: "90vw", alignItems: "center", justifyContent: "center" },
  });

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

      <div className="center-animation">
        <animated.div
          style={{
            display: "flex",
            border: "red solid 2px",
            ...props,
          }}
        >
          <img className="home-image" src={homeImage1} alt="Curvy Shelf" />
        </animated.div>
      </div>

      {/* <div className="image-container">
          <img className="home-image" src={homeImage1} alt="Curvy Shelf" />
      </div> */}

      {/* <h6>blank encounters since June</h6> */}
    </div>
  );
}
