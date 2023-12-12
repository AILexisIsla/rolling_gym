import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const Contacto = () => {
  return (
    <>
      <h1 className="stroke-text">CONTAC </h1>
      <span>TANOS</span>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
    </>
  );
};
export default Contacto;
