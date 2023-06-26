import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const HeadBar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="text-light text-decoration-none">
              💀Home
            </Link>
            <Link to="/input" className="text-light text-decoration-none">
              👹Formulario
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeadBar;
