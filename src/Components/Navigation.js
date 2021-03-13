import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from 'react-bootstrap/Col'

export default function Navigation() {
  return (
    <div className="background">
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand className="textColor" href="#/">
          LaRob Payton
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse title="Social" id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="staticLink" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#bio">Bio</Nav.Link>
            <Nav.Link href="#writing">Writing</Nav.Link>
            <NavDropdown className="dropdown" title="Links" id="basic-nav-dropdown">
              <NavDropdown.Item target="_blank" href="#https://www.linkedin.com/in/larob-payton-52b3481a8/">
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="#https://www.facebook.com/larob.payton">
                Facebook
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="#https://www.instagram.com/robbpayton/?hl=en">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="#https://twitter.com/critonicizethis?lang=en">
                Twitter
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="dropdown" title="My Work" id="basic-nav-dropdown">
              <NavDropdown.Item target="_blank" href="#www.hearingincolor.org">
                Hearing in Color
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="#https://www.wfmt.com/2021/02/23/larob-k-payton/">
                WFMT
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="#https://www.newmusicchicago.org/leadership-team/">
                New Music Chicago
              </NavDropdown.Item>
            </NavDropdown> 
            </Nav>
            <Nav>
              <Nav.Link href="mailto:larobpayton011@gmail.com">Email</Nav.Link>
            </Nav>
         
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
