import "./Postpage.css";
import listenImage from "../../images/listening-form.png";
import Auth from "../../utils/auth";
import Login from "../Login/Login";
import Createpost from "../../components/Createpost/Createpost";
import "../../components/Createpost/Createpost.css";

export default function Postpage() {
  if (Auth.loggedIn()) {
    return (
      <div className="create-post">
        {/* make this a generated location */}
        <div style={{ display: "flex" }}>
          <img
            className="image-create-container"
            src={listenImage}
            alt="Guy listening"
          />
        </div>
        <div className="input-flex-container">
          <div className="main-box">
            <h6>Share your encounter with others</h6>
            <Createpost />
          </div>
        </div>
      </div>
    );
  } else {
    return <Login />;
  }
}
