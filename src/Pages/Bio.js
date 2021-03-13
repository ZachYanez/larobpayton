import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image";
import Shot1 from "../Assets/shot1.jpg";
import Shot2 from "../Assets/shot2.jpg";


export default function Bio() {
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
            <Nav.Link className="staticLink" href="#bio">
              Bio
            </Nav.Link>
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
      <div className="content-area background">
        <br />
        <Row className="justify-content-center">
          <Image className="image w-50" src={Shot1} />
        </Row>
        <br />
        <Row className="justify-content-center align-items-center h6 ml-5 mr-5">
          <div className="lineStyle">
            A native of Temple Hills, Maryland, Bass-Baritone, LaRob K. Payton developed a love for singing at an early age. He
            found a spirit in the Gospel songs he sang, passion in the R&B he heard, and nuance in the Classical music he studied.
            A graduate of DePaul University where he received a Bachelor of Music in Vocal Performance, LaRob has studied with
            world-renowned teachers, directors, and coaches and has had musical opportunities that include traveling to study
            language, culture, and music. LaRob continues to sing around the Chicago-area (William Ferris Chorale/North Shore
            Baptist Church) and is the Founder and Artistic Director of Hearing in Color, an organization dedicated to uplifting
            those whose contributions and stories have been historically excluded from classical spaces.
            <br />
            <br />
            <Row className="justify-content-center">
              <Image className="image w-50" src={Shot2} />
            </Row>
            <br />
            As an Arts Administrative Specialist, he concurrently works at Lyric Opera of Chicago in the Learning and Creative
            Engagement Department, sits on the Board of La Caccina, a professional women's ensemble, as Diversity and Community
            Engagement Advisor, is an active consultant with the recently formed Black Opera Alliance and Black Administrators of
            Opera groups. LaRob also aims to use his voice to connect people from different communities as a newly appointed host
            of Chicago's Classical music station, WFMT (98.7 FM) to continue decentralizing the predominantly white, European,
            male-centered classical consciousness.
          </div>
          
        </Row>
      </div>
      <Button className="ml-5"href="https://music.depaul.edu/about/alumni/Pages/sonia-mantell-bio.aspx" variant="outline-secondary">More...</Button>
      <br />
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand href="#/">LP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">
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
