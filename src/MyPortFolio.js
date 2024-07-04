import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Css/MyPortFolio.css";
import img from "./images/stock-portfolio-1.png";

const MyPortFolio = () => {
  return (
    <>
      <Navbar expand="lg" sticky="top" fixed="top" className="MyPortFlio">
        <Container>
          <Navbar.Brand className="nav-brand">
            <img src={img} className="img" /><div style={{color:'', marginTop:'-40px', marginLeft:'70px'}}>  PortFolio</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={50}
                  to="Home"
                  className="Nav-Link"
                >
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={50}
                  to="Education"
                  className="Nav-Link"
                >
                  Education
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={50}
                  to="Experience"
                  className="Nav-Link"
                >
                  Experience
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={50}
                  to="Project"
                  className="Nav-Link"
                >
                  Project
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={50}
                  to="Resume"
                  className="Nav-Link"
                >
                  Resume
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={50}
                  to="Skill"
                  className="Nav-Link"
                >
                  Skills
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={50}
                  to="Contact"
                  className="Nav-Link"
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyPortFolio;
