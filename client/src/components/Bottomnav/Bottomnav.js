import "./Bottomnav.css";
import { Link } from "react-router-dom";

export default function Bottomnav() {
  return (
    <div className="bottomnav-flex-container">
      <Link to="/createpost">
        <i className="fa-solid fa-folder-open fa-2xl"></i>
      </Link>

      <Link to="/login">
        <i className="fa-solid fa-people-group fa-2xl"></i>
      </Link>

{/* change the ~closed box icon~ below to link to something */}
      <a>
        <i className="fa-solid fa-box-archive fa-2xl"></i>
      </a>

    </div>
  );
}
