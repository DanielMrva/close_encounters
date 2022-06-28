import "./Encountercard.css";
import { Accordion, Card, Button, Form } from 'react-bootstrap'
import CommentContainer from "../CommentDisplay/CommentContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";

export default function Encountercardsingle(props) {
  //   let profilepic = props.profilepic;
  //   console.log("this is props", props);
  
  const [formData, setFormData] = useState({});
  const [saveComment, { error }] = useMutation(ADD_COMMENT);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    

    console.log("click");
    try {
      const username = props.encounterUser;
      console.log("username", username);
      const userId = props.userId._id;
      console.log("userId", userId);
      const encounterId = props._id;
      // const encounterId = e.target.getAttribute('data-encounter')
      console.log("encounterId", encounterId);
      console.log("commentText", formData.commentText)

      const { data } = await saveComment({
        variables: {
          commentText: formData.commentText,
          commentUser: username,
          userId: userId,
          encounterId: encounterId
        },
      })
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
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control 
              size="sm" 
              type="text" 
              placeholder="leave a comment"
              defaultValue="your thoughts here"
              name="commentText"
              value={formData.commentText}
              onChange={handleInputChange}
              />
              
            <Button variant="light" type="submit" value="Submit!" className="buttonClass">Submit</Button>
            </Form.Group>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="1">
      <Accordion.Header>All Comments</Accordion.Header>
      <Accordion.Body>
        <CommentContainer quantityDisplay={10} encounterId={props._id}>

        </CommentContainer>

      </Accordion.Body>
    </Accordion.Item>
    </Accordion>

  </div>

);
}
