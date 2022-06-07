import "./Home.css";
import homeImage from "../../../public/curve-shelf-mobile.png";

export default function Home() {
  return (
    <div>
      <div className="heading-container">
        <h2>
          TOGETHER WE CAN MAKE THE UNEXPLAINED AND THE UNIMAGINABLE.. UNDENIABLE
        </h2>
      </div>
      <div>
        <img src={homeImage} alt="Curvy Shelf" />
      </div>
      <h6>blank encounters since June</h6>
    </div>
  );
}
