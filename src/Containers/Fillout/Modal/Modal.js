import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modal.css";

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Please confirm given details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="data-table">
          {props.formdata.map((el) => {
            return (
              <div className="row" key={el.placeholder}>
                <p>{el.label}</p>
                <p>{el.value.toString()}</p>
              </div>
            );
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onSubmit}>Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
