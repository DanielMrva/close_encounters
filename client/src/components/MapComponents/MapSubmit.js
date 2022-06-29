import React from "react";
import { useState, useEffect } from "react";
import { useModal, useModalUpdate } from "../../contexts/modalContext";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Createpost from "../Createpost/Createpost";

const SubmitModal = ({ setShowModal, showModal, newMarkPos }) => {
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  // console.log(showModal);
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What did you Encounter?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Createpost newMarkPos={newMarkPos} setShowModal={setShowModal}></Createpost>
        </Modal.Body>
        <Modal.Footer className="center-flex-submit">
          <Button variant="secondary" onClick={handleClose} className="button1 sub-text">
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SubmitModal;
