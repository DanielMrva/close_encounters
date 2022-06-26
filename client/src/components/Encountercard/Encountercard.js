import "./Encountercard.css";
// import propic from "../../images/profilepic.jpg";
// import propic1 from "../../images/profilepic1.png";
// import propic2 from "../../images/profilepic2.png";
// import propic3 from "../../images/profilepic3.png";
// import propic4 from "../../images/profilepic4.png";
// import propic5 from "../../images/profilepic5.png";
// import propic6 from "../../images/profilepic6.png";

import { useQuery } from "@apollo/client";
import { ALL_EVENTS } from "../../utils/queries";
// import { printIntrospectionSchema } from "graphql";

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
