import "./Bottomnav.css";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

export default function Bottomnav() {
  return (
    <div className="bottomnav-flex-container">
      <Link to="/postpage">
        <i className="fa-solid fa-folder-open fa-2xl"></i>
      </Link>
      <Link to="/map">
        <i className="fa-solid fa-earth-americas fa-2xl"></i>
      </Link>
      <Link to="/user">
        <i className="fa-solid fa-person-falling fa-2xl"></i>
      </Link>
      {/* <Link to="/postpage">
        <i className="fa-solid fa-box-archive fa-2xl"></i>
      </Link> */}
    </div>
  );
}
