import "./Encountercard.css";

export default function Encountercardsingle(props) {
  //   let profilepic = props.profilepic;
  //   console.log("this is props", props);

  console.log(props);
  return (
    // <div key={index}>
    <div className="card-container">
      <div className="card-top-flex">
        <div className="user-icon">
          <div className="pic-header-flex">
            <img
              className="profile-pic"
              src={require(`../../images/${props.userId.profilepic}.png`)}
              alt="user"
            />
            {/* <img
              className="profile-pic"
              src={require(`../../images/${profilepic}.png`)}
              alt="user"
            /> */}
          </div>
        </div>
        <div className={`card-header-encounter`}>
          <div className="username-card">{props.userId.username}</div>
          <div className="date-card" style={{ color: "black" }}>
            {props.date}
          </div>
          <div className="location-card">{props.type}</div>
          <div className="date-card">{props.category}</div>
        </div>
      </div>
      {/* <div className={`description-flex ${viewableStyleTitle}`}> */}
      <div>
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
          {props.title}
        </p>
      </div>
      <div>
        {/* <div className={`description-flex ${viewableStyleDescription}`}> */}
        <p>{props.description}</p>
      </div>
    </div>
  );
}
