import "./Topnav.css";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

export default function Topnav() {
  return (
    <div className="topnav-flex-container">
      <Link to="/">
        <div className="close">close encounters</div>
      </Link>

      <div className="icon-container">
        <Link to="/map">
          <i className="fa-solid fa-earth-americas fa-2xl"></i>
        </Link>

        <Link to="/user">
          <i className="fa-solid fa-person-falling fa-2xl"></i>
        </Link>
      </div>
    </div>
  );
}
