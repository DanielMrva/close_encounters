import "./Encountercard.css";
import { Accordion, Card, Button, Form } from "react-bootstrap";
import CommentContainer from "../CommentDisplay/CommentContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import ls from "localstorage-slim";
import { useQuery } from "@apollo/client";
import { ENC_COMMENTS } from "../../utils/queries";

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

  ls.config.encrypt = true;

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
      // const username = localStorage.getItem("user");
      // console.log("username", username);
      // const userId = localStorage.getItem("userId");
      // console.log("userId", userId);

      const username = ls.get("usernameHash");
      const userId = ls.get("userIdHash");

      const encounterId = props._id;

      const { data } = await saveComment({
        variables: {
          commentText: commentData.commentText,
          commentUser: username,
          encounterId: encounterId,
          userId: userId,
        },
      });
    } catch (err) {
      console.log(err);
    }

    window.location.reload(false);
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
        {/* </div> */}
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
          className="location-card"
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
              margin: "8px 0px",
              fontSize: "1rem",
              fontFamily: "Red rose",
              textTransform: "capitalize",
              lineHeight: "1rem",
              color: "black",
            }}
            location-card
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
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header className="location-card">
            All Comments
          </Accordion.Header>
          <Accordion.Body>
            <CommentContainer
              quantityDisplay={10}
              encounterId={props._id}
            ></CommentContainer>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* <div className="description-flex">
        <p>{props.description}</p>
      </div> */}
    </div>
  );
}
