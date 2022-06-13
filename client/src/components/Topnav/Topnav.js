import "./Topnav.css";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

export default function Topnav() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="topnav-flex-container">
      <Link to="/">
        <div className="close">close encounters</div>
      </Link>

      <div className="icon-container">
        {/* <Link to="/user">
          <i className="fa-solid fa-person-falling fa-2xl"></i>
        </Link> */}
        {Auth.loggedIn() ? (
          <button className="btn btn-lg btn-light m-2" onClick={logout}>
            <i className="fa-solid fa-user-check"></i>
          </button>
        ) : (
          <>
            <Link to="/login">
              <i className="fa-solid fa-user fa-2xl"></i>
              {/* <i className="fa-solid fa-people-group fa-2xl"></i> */}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
