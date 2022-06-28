import "./User.css";
import clockImage from "../../images/clocks.png";
import shipImage from "../../images/light-ship.png";
// import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import Login from "../Login/Login";
import Encountercard from "../../components/Encountercard/Encountercard";

import Cookies from 'universal-cookie';

function User() {

  const cookie = new Cookies;

  const username = cookie.get('username');

  console.log('user: ', username)

  if (Auth.loggedIn()) {
    return (
      <div className="user-container">
        <div className="main-flex-container">
          <div className="encountercard-user">
            <h4 style={{ fontWeight: "300" }}>
              Recent Encounters of Close Friends
            </h4>
            <Encountercard
              quantityDisplay={10}
              viewableStyleTitle="not-viewable"
            />
          </div>
          <div className="scenario-container">
            <div className="flex-center">
              <h4>
                WELCOM BACK, {username} . TOMORROW YOU MAY WAKE UP IN A LOCATION WITH NO IDEA HOW YOU GOT
                THERE
              </h4>
            </div>

            <div className="flex-center">
              <img className="clock-style" src={clockImage} alt="Clocks" />
            </div>

            <div className="flex-center time">
              <h3>SITUATION: UNACCOUNTED FOR LOSS OF TIME</h3>
            </div>

            {/* <div className="flex-center time">
              <h3>SITUATION: UNACCOUNTED FOR LOSS OF TIME</h3>
            </div> */}

            <div className="flex-center question-title">
              <div>HOW WOULD YOU RESPOND</div>
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
            <div className="time-loss">
              <div className="flex-center time">
                <h3>LEARNING ABOUT TIME LOSS AS A SYMPTOM</h3>
              </div>
              <div className="flex-center time-loss">
                <p className="time-loss-para">
                  Time loss is a common symptom of close proximity to
                  anti-gravity systems that utilize bends in space and time for
                  the propulsion of UFOs. (TXF: "Dreamland") A residual
                  variation in time can occasionally be detected when
                  transversing areas of space exposed to a UFO. (TXF: "E.B.E.")
                </p>
              </div>
              <div className="flex-center">
                <p className="time-loss-para">
                  The effects of such exposure will usually persist within an
                  exposed area until the space-time continuum has fully healed
                  back to its original curvature. (TXF: "E.B.E.", "Dreamland
                  II") People who claim to have been abducted by UFOs or have
                  made UFO sightings have commonly reported unexplained time
                  loss. However, in the early 1990s, science maintained that
                  time could not simply disappear as it was a universal
                  invariant. (TXF: "Pilot"){" "}
                </p>
              </div>
            </div>

            <div className="flex-center">
              <img
                className="clock-style"
                src={shipImage}
                alt="Light that looks like a ship"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Login />;
  }
}

export default User;