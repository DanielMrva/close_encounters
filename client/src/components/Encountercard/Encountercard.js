import "./Encountercard.css";
import profileImage from "../../images/profilepic.jpg";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

export default function Encountercard() {
  const { loading, err, data } = useQuery(QUERY_USER);

  if (loading) return "loading...";
  if (err) return err.message;
  // const userList = data?.user || [];

  console.log(data);

  return (
    <div className="card-page">
      <div className="card-container">
        <div className="card-top-flex">
          <div className="user-icon">
            <div className="pic-header-flex">
              <img className="profile-pic" src={profileImage} alt="user" />
            </div>
          </div>
          <div className="card-header-flex">
            <div className="username-card">Zimzam21098</div>
            <div className="location-card">Boulder, CO</div>
            <div className="date-card">June 7th 2022</div>
          </div>
        </div>
        <div className="description-flex">
          <p>
            Was walking the dog around 7pm last night when I looked into the sky
            and saw a large triangular object hovering above. It made no sound.
          </p>
        </div>
      </div>
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
