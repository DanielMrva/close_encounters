import "./Encountercard.css";
import propic from "../../images/profilepic.jpg";
import propic1 from "../../images/profilepic1.png";
import propic2 from "../../images/profilepic2.png";
import propic3 from "../../images/profilepic3.png";
import propic4 from "../../images/profilepic4.png";
import propic5 from "../../images/profilepic5.png";
import propic6 from "../../images/profilepic6.png";

import { useQuery } from "@apollo/client";
import { ALL_EVENTS } from "../../utils/queries";

export default function Encountercard(props) {
  const { loading, err, data } = useQuery(ALL_EVENTS);

  if (loading) return "loading...";
  if (err) return err.message;

  console.log(props);

  let randomPics = [
    propic,
    propic1,
    propic2,
    propic3,
    propic4,
    propic5,
    propic6,
  ];

  let getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  let encounterList = data?.encounters || [];
  let smallEncounterList = encounterList.slice(0, props.quantityDisplay);

  let listWithPic = smallEncounterList.map((item) =>
    Object.assign({}, item, { profilepic: getRandomArrItem(randomPics) })
  );

  console.log(listWithPic);

  // let cardTitle = `${props.cardStyle}`;

  // const titleColor = {
  //   color: props.color,
  // };

  let viewableStyleDescription = `${props.viewableStyleDescription}`;
  let viewableStyleTitle = `${props.viewableStyleTitle}`;

  return (
    <div className="card-page">
      {listWithPic.map((data, index) => {
        return (
          <div key={index}>
            <div className="card-container">
              <div className="card-top-flex">
                <div className="user-icon">
                  <div className="pic-header-flex">
                    <img
                      className="profile-pic"
                      src={data.profilepic}
                      alt="user"
                    />
                  </div>
                </div>
                <div className={`card-header-encounter`}>
                  <div className="username-card">{data.encounterUser}</div>
                  <div className="date-card" style={{ color: "black" }}>
                    {data.date}
                  </div>
                  <div className="location-card">{data.category}</div>
                  <div className="date-card">{data.type}</div>
                </div>
              </div>
              <div className={`description-flex ${viewableStyleTitle}`}>
                <p
                  style={{
                    // fontWeight: "500",
                    margin: "8px 0px",
                    fontSize: "1rem",
                    fontFamily: "Roboto Slab",
                    textTransform: "capitalize",
                    lineHeight: "1rem",
                  }}
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

// export default function Encountercard() {
//   const { loading, err, data } = useQuery(QUERY_USER);

//   if (loading) return "loading...";
//   if (err) return err.message;
//   // const userList = data?.user || [];

//   console.log(data);

//   return (
//     <div className="user-container">
//       <h6>you are currently in encounter card</h6>
//       <div>
//         {data.users.map((user, index) => {
//           return (
//             <div key={index}>
//               <div>
//                 <div>{user.username}</div>
//               </div>
//               <div>{user.email}</div>
//               <div>{user.email}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
