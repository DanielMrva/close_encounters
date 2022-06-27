import React from "react";

const CommentCard = ({data, index}) => {

    return (
        <div key={index} className="card-container">
            <div className="card-header-comment">
                <div className="username-card">{data.commentUser}</div>
                <div className="date-card" style={{color: "black"}}>
                    {data.createdAt}
                </div>
            </div>
            <div>
                <p>{data.commentText}</p>
            </div>
        </div>
    )
};

export default CommentCard;

// Below is just a reference to the stuff pulled by the query
// encounterComments{
//     commentText
//     createdAt
//     commentUser
//     userId
//     encounterId
//     corroborations
//   }