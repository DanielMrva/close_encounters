import "./Encountercard.css";
import profilepic from "../../images/profilepic.jpg";
import { useQuery } from "@apollo/client";
import { ALL_EVENTS } from "../../utils/queries";

export default function Encountercard() {
  const { loading, err, data } = useQuery(ALL_EVENTS);

  if (loading) return "loading...";
  if (err) return err.message;
  const encounterList = data?.encounters || [];
  const smallEncounterList = encounterList.slice(0, 10);

  return (
    <div className="card-page">
      {smallEncounterList.map((data, index) => {
        return (
          <div key={index}>
            <div className="card-container">
              <div className="card-top-flex">
                <div className="user-icon">
                  <div className="pic-header-flex">
                    <img className="profile-pic" src={profilepic} alt="user" />
                  </div>
                </div>
                <div className="card-header-flex">
                  <div className="username-card">{data.title}</div>
                  <div className="location-card">{data.category}</div>
                  <div className="date-card">{data.type}</div>
                </div>
              </div>
              <div className="description-flex">
                <p>{data.description}</p>
              </div>
            </div>
          </div>
        );
      })}
      ,
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
