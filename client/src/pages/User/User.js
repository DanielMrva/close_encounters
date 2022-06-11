import "./User.css";
import clockImage from "../../images/clocks.png";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';
import Login from '../Login/Login';

export default function User() {
  if (Auth.loggedIn()) {

  return (
    <div className="user-container">
      <div className="flex-center scenario-into">
        <h4>
          TOMORROW YOU MAY WAKE UP IN A LOCATION WITH NO IDEA HOW YOU GOT THERE
        </h4>
      </div>

      <div className="flex-center">
        <img className="clock-style" src={clockImage} alt="Clocks" />
      </div>

      <div className="flex-center time">
        <h3>SITUATION: UNACCOUNTED FOR LOSS OF TIME</h3>
      </div>

      <div className="flex-center question-title">
        <div>DO YOU</div>
      </div>

      <div className="flex-center">
        <div className="flex-options question-title">
          <p className="user-option-one">
            Wander home and pretend it never happened
          </p>
          <p className="user-option-two">
            Find a hypnotist to help you unlock the memories
          </p>
        </div>
      </div>
    </div>
  );

  } else {

    return <Login/>

  }

}
