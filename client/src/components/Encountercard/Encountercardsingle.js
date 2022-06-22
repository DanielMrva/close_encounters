import "./Encountercard.css";

export default function Encountercard(props) {
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
