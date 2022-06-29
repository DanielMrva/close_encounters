import "./Encountercard.css";

import { useQuery } from "@apollo/client";
import { ALL_EVENTS } from "../../utils/queries";

export default function Encountercard(props) {
  const { loading, err, data } = useQuery(ALL_EVENTS);

  if (loading) return "loading...";
  if (err) return err.message;

  let encounterList = data?.encounters || [];

  let smallEncounterList = encounterList.slice(0, props.quantityDisplay);

  let viewableStyleDescription = `${props.viewableStyleDescription}`;
  let viewableStyleTitle = `${props.viewableStyleTitle}`;

  return (
    <div className="card-page">
      {smallEncounterList.map((data, index) => {
        return (
          <div key={index}>
            <div className="card-container">
              <div className="card-top-flex">
                <div className="user-icon">
                  <div className="pic-header-flex">
                    {data?.userId?.profilepic ? (
                      <img
                        className="profile-pic"
                        src={require("../../images/" +
                          data.userId.profilepic +
                          ".png")}
                        alt="user"
                      />
                    ) : null}
                  </div>
                </div>
                <div className={`card-header-encounter`}>
                  <div className="username-card">{data.encounterUser}</div>
                  <div className="date-card" style={{ color: "black" }}>
                    {data.date}
                  </div>
                  <div className="location-card">{data.type}</div>
                  <div className="date-card">{data.category}</div>
                </div>
              </div>
              <div className={`description-flex ${viewableStyleTitle}`}>
                <p
                  style={{
                    // fontWeight: "500",
                    margin: "8px 0px",
                    fontSize: "1rem",
                    fontFamily: "Red rose",
                    textTransform: "capitalize",
                    lineHeight: "1rem",
                    color: "black",
                  }}
                  location-card
                >
                  {data.title}
                </p>
              </div>
              <div className={`description-flex ${viewableStyleDescription}`}>
                <p>{data.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}