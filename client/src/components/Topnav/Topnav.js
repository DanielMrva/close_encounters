import "./Topnav.css";
import Auth from '../../utils/auth';
import { Link } from "react-router-dom";

export default function Topnav() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="topnav-flex-container">

      <Link to ="/">
        close encounters
      </Link>

      <a>
        encountercardtest
      </a>

      <div className="icon-container">

        <Link to="/mapwrapper">
          <i className="fa-solid fa-earth-americas fa-2xl"></i>
        </Link>

        <Link to="/user">
          <i className="fa-solid fa-person-falling fa-2xl"></i>
        </Link>
        {/* this is where the logout icon button goes */}

        <a>
          <i className="fa-solid fa-person-falling fa-2xl"></i>
        </a>

      </div>
    </div>
  );
}
