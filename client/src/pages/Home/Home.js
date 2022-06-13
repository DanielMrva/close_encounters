import "./Home.css";
// import homeImage from "../../images/curve-shelf-mobile.png";
import homeImage1 from "../../images/curve-shelf-crop.png";

import Encountercard from "../../components/Encountercard/Encountercard";
import { useState } from "react";
// import Openup from "../../components/Openup";
import { useSpring, animated } from "react-spring";

export default function Home() {
  // this.state = { makeWide: false };
  const [makeWide, setMakeWide] = useState("false");

  let toggle = (e) => this.setMakeWide();

  const props = useSpring({
    // toggle: this.toggle,
    loop: true,
    from: {
      width: "30vw",
      alignItems: "center",
      justifyContent: "center",
    },
    config: { duration: 7000 },
    to: {
      width: "100vw",
      alignItems: "center",
      justifyContent: "center",
    },
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
            viewableStyleTitle="not-viewable"
          />
        </div>
      </div>

      {/* <button onClick={toggle}>Click me</button> */}
      <div className="center-animation">
        <animated.div
          // toggle={this.toggle}
          style={{
            display: "flex",
            // border: "red solid 2px",
            ...props,
          }}
        >
          <img className="home-image" src={homeImage1} alt="Curvy Shelf" />
        </animated.div>
      </div>

      {/* <div className="center-animation">
      
        <animated.div
          style={{
            display: "flex",
            border: "red solid 2px",
            ...props,
          }}
        >
          <img className="home-image" src={homeImage1} alt="Curvy Shelf" />
        </animated.div>
      </div> */}

      {/* <div className="image-container">
          <img className="home-image" src={homeImage1} alt="Curvy Shelf" />
      </div> */}

      {/* <h6>blank encounters since June</h6> */}
    </div>
  );
}
