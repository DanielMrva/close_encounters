import "./Encountercard.css";
import { Accordion, Card, Button, Form, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";

export default function Encountercardsingle(props) {

  const [commentData, setCommentData] = useState({});
  const [saveComment, { error }] = useMutation(ADD_COMMENT);

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const commentHandler = async (e) => {
    e.preventDefault();
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
          userId: userId
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
    <div>
      <p>{props.description}</p>
    </div>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="location-card"
          style={{
            fontFamily: "Red rose",
            textTransform: "capitalize",
            lineHeight: "0rem",
            color: "black",
          }}
        >Comment
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
              {console.log("commentdata.commentText:", commentData.commentText)}
            </Form.Group>
            <Button variant="light" type="submit" value="Submit!">Submit</Button>
            {/* {console.log("these are the props", props)} */}
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  </div>

);
}
