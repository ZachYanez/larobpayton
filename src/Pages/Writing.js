import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FooterInfo from "../Components/FooterInfo";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Gospel from "../Assets/gospel.jpg";
import Gospel2 from "../Assets/gospel2.jpg";

export default function Writing() {
  return (
    <div className="background">
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand className="textColor" href="#/">
          LaRob Payton
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse title="Social" id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#bio">Bio</Nav.Link>
            <Nav.Link className="staticLink" href="#writing">
              Writing
            </Nav.Link>
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
      <div className="content-area cardSpecs background">
        <br />
        <Card className="textColorBlack">
          <Card.Body>
            <Card.Title>Faith, Identity, and Songs: Celebrating the Blackness of Gospel Music</Card.Title>
            <Card.Text>By LaRob Payton | February 4, 2021</Card.Text>
            <Card.Img src={Gospel}></Card.Img>
            <br />
            <br />
            <Button href="#https://www.wfmt.com/2021/02/04/celebrating-the-blackness-of-gospel-music/" variant="dark">
              Read
            </Button>
          </Card.Body>
        </Card>
      </div>
      <br />
      <Card variant="dark" className="spotify">
        
        <iframe
          src="https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A6o8nZSRGamAhafEOVLcc2O"
          width="300"
          height="300"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </Card>
      <br/>
      <div className="content-area cardSpecs background">
        <Card className="textColorBlack">
          <Card.Body>
            <Card.Title>Music of the Black Church</Card.Title>
            <Card.Text>By LaRob Payton | February 10, 2021</Card.Text>
            <Card.Img src={Gospel2}></Card.Img>
            <br />
            <br />
            <Button href="#https://www.wfmt.com/2021/02/10/music-of-the-black-church/" variant="dark">
              Read
            </Button>
          </Card.Body>
        </Card>
      </div>
      <FooterInfo />
    </div>
  );
}
