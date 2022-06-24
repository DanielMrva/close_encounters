import "./Encountercard.css";
import { Accordion, Card, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

export default function Encountercardsingle(props) {
  //   let profilepic = props.profilepic;
  //   console.log("this is props", props);
  const [formData, setFormData] = useState({});

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
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="location-card"
                      style={{
                        fontFamily: "Red rose",
                        textTransform: "capitalize",
                        lineHeight: "0rem",
                        color: "black",
                      }}
          
          >Corroborate</Accordion.Header>
          <Accordion.Body
            style={{
              fontFamily: "Red rose",
              textTransform: "capitalize",
              lineHeight: "1rem",
              color: "black",
            }}
          >
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control size="sm" type="text" placeholder="leave a comment" />
              </Form.Group>
            </Form>
            <Button variant="light">Submit</Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </div>

  );
}
