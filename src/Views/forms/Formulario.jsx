import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./formulario.css";

const Formulario = () => {
  return (
    <div className="h2css">
      <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
      <Form className="formularioCss">
        <Form.Group
          className="mb-3 w-75 p-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group
          className="mb-3 w-75 p-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Descripción:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="dark" className="m-2">
          Enviar
        </Button>{" "}
      </Form>
    </div>
  );
};

export default Formulario;
