import "./Home.css";
// import homeImage from "../../images/curve-shelf-mobile.png";
import homeImage1 from "../../images/curve-shelf-crop.png";

import Encountercard from "../../components/Encountercard/Encountercard";
import { useState } from "react";
// import Openup from "../../components/Openup";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const props = useSpring({
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
    <div className="home-page">
      <div className="heading-container">
        <div className="header-text">
          <h2>
            TOGETHER WE CAN MAKE THE UNEXPLAINABLE AND THE UNIMAGINABLE...
            UNDENIABLE
          </h2>
        </div>
        <p className="keep-scroll">
          The Truth Is Out There - Keep Scrolling to get Closer
        </p>
      </div>

      <div className="home-belowfold">
        {/* <div className="image-container"> */}
        <div className="about-text">
          <h4 style={{ textTransform: "capitalize" }}>About the cause</h4>
          <p className="about-para">
            Close Encounters aims to connect individuals who have been involved
            in various encounters. We are not alone -- and neither are you on
            this application.
          </p>

          <p className="about-para">
            The next time you aren't sure if your "eyes are playing tricks on
            you" you can visit this app to corroborate your experience with
            other users who may have also seen something in your general
            location. Use the map to find the location you were at when things
            got wonky and see if others have posted about a similar experience.
            Sometimes you may be the first to post about something, giving
            someone else just the sign they need.
          </p>
        </div>
        <img className="home-image" src={homeImage1} alt="Curvy Shelf" />
        {/* </div> */}

        <div className="encountercard-home-flex">
          <div className="encountercard-home">
            <h4 style={{ fontWeight: "300" }}>Recent Sightings</h4>
            <Encountercard
              quantityDisplay={20}
              viewableStyleDescription="viewable"
              viewableStyleTitle="viewable"
              cardContainer="home-card-padding"
            />
          </div>
        </div>
      </div>

      {/* <button onClick={toggle}>Click me</button> */}
      {/* <div className="center-animation">
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
      </div> */}

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

      {/* <h6>blank encounters since June</h6> */}
    </div>
  );
}
