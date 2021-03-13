import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function FooterInfo() {
  return (
    <div className="background">
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand href="#/">LP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:larobpayton011@gmail.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
