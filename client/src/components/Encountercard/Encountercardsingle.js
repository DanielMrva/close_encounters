import "./Encountercard.css";
import { Accordion, Card, Button, Form } from "react-bootstrap";
import CommentContainer from "../CommentDisplay/CommentContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
// import environment from "../../images/icons8-env-100.png";
// import hear from "../../images/icons8-hear-100.png";
// import see from "../../images/icons8-see-100.png";
// import thought from "../../images/icons8-thought-100.png";
// import touch from "../../images/icons8-touch-100.png";

export default function Encountercardsingle(props) {
  // switch (props.category) {
  //   case "Environmental change":
  //     iconCategory = environment;
  //     break;
  //   case "Audible Sighting":
  //     iconCategory = hear;
  //     break;
  //   case "Physical contact":
  //     iconCategory = touch;
  //     break;
  //   case "PsychoKinesis":
  //     iconCategory = thought;
  //     break;
  //   case "Visual Sighting":
  //     iconCategory = see;
  //     break;

  const [commentData, setCommentData] = useState({});
  const [saveComment, { error }] = useMutation(ADD_COMMENT);

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const commentHandler = async (e) => {
    e.preventDefault();

    console.log("click");
    try {
      const username = localStorage.getItem("user");
      console.log("username", username);
      const userId = localStorage.getItem("userId");
      console.log("userId", userId);
      const encounterId = props._id;
      console.log("encounterId:", encounterId);

      const { data } = await saveComment({
        variables: {
          commentText: commentData.commentText,
          commentUser: username,
          encounterId: encounterId,
          userId: userId,
        },
      });
      console.log("comment:", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card-container">
      <div className="card-top-flex">
        <div className="user-icon">
          <div className="pic-header-flex">
            <img
              className="profile-pic"
              src={require(`../../images/${props.userId.profilepic}.png`)}
              alt="user"
            />
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
      <div>
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
          {props.title}
        </p>
      </div>

      <div className="description-flex">
        <p>{props.description}</p>
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header
            className="location-card"
            style={{
              fontFamily: "Red rose",
              textTransform: "capitalize",
              lineHeight: "0rem",
              color: "black",
            }}
          >
            Comment
          </Accordion.Header>
          <Accordion.Body
            style={{
              fontFamily: "Red rose",
              textTransform: "capitalize",
              lineHeight: "1rem",
              color: "black",
            }}
          >
            <Form onSubmit={commentHandler}>
              <Form.Group className="mb-3" role="form">
                <Form.Control
                  className="form-control"
                  size="sm"
                  type="text"
                  placeholder="leave a comment"
                  defaultValue="your thoughts here"
                  value={commentData.commentText}
                  name="commentText"
                  onChange={handleCommentChange}
                />
                {console.log(
                  "commentdata.commentText:",
                  commentData.commentText
                )}
              </Form.Group>
              <Button variant="light" type="submit" value="Submit!">
                Submit
              </Button>
              {/* {console.log("these are the props", props)} */}
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>All Comments</Accordion.Header>
          <Accordion.Body>
            <CommentContainer
              quantityDisplay={10}
              encounterId={props._id}
            ></CommentContainer>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
