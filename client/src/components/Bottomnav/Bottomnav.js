import "./Bottomnav.css";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

export default function Bottomnav() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="bottomnav-flex-container">
      <Link to="/createpost">
        <i className="fa-solid fa-folder-open fa-2xl"></i>
      </Link>
      <Link to="/map">
        <i className="fa-solid fa-earth-americas fa-2xl"></i>
      </Link>
      <Link to="/user">
        <i className="fa-solid fa-person-falling fa-2xl"></i>
      </Link>
      {Auth.loggedIn() ? (
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          Logout
        </button>
      ) : (
        <>
          <Link to="/login">
            <i className="fa-solid fa-people-group fa-2xl"></i>
          </Link>
        </>
      )}
      {/* change the ~closed box icon~ below to link to something */}
      <a>
        <i className="fa-solid fa-box-archive fa-2xl"></i>
      </a>
    </div>
  );
}
