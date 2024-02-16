import React from 'react'
import {Link}from "react-scroll"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Join from '../Joinwithme/Join';
import "./Header.css"
const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const handleNavCollapse = () => {
    setExpanded(!expanded);
  };
  return (
    <>
     <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      expanded={expanded}
      className={`header ${expanded ? 'nav-open' : ''} header`}
    >
      <Container className="top_cont">
        <Navbar.Brand >
          <Link to="home" smooth={true} duration={500} className="left_cont">
            Develop<span style={{color:"#f64c08"}}>er</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavCollapse} />
        <Navbar.Collapse id="responsive-navbar-nav" className=" justify-content-end ">
          <Nav >
            <Nav.Link onClick={handleNavCollapse} >
              <Link to="about" smooth={true} duration={500} className="header__right">
                About Me
              </Link>
            </Nav.Link>
            <Nav.Link onClick={handleNavCollapse}>
              <Link to="skills" smooth={true} duration={500} className="header__right">
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link onClick={handleNavCollapse}>
              <Link to="projects" smooth={true} duration={500} className="header__right">
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link onClick={handleNavCollapse}>
              <Link to="contact" smooth={true} duration={500} className="header__right">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link className={`header__rightButton ${expanded ? 'button-open' : ''} text-success`}>
              <Join/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header