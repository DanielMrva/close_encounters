import "./Home.css";
import homeImage from "../../images/curve-shelf-mobile.png";
import Encountercard from "../../components/Encountercard/Encountercard";

export default function Home() {
  return (
    <div>
      <div className="heading-container">
        <h2>
          TOGETHER WE CAN MAKE THE UNEXPLAINED AND THE UNIMAGINABLE...
          UNDENIABLE
        </h2>
        <Encountercard />
      </div>
      <div className="image-container">
        <img src={homeImage} alt="Curvy Shelf" />
      </div>
      <h6>blank encounters since June</h6>
    </div>
  );
}
