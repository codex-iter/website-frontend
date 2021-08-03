import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../Assets/Images/codex logo 2.png";
import "../Styles/navbar.css";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    // console.log(history.location.pathname);
    return { color: "#56ccf2", fontSize: "1.5em", fontWeight: "bold" };
  } else {
    return { color: "white", fontSize: "1.5em", fontWeight: "bold" };
  }
};

const Menu = ({ history, children }) => {
  return (
    <div>
      {children}
      <Navbar className='header' collapseOnSelect expand='lg' variant='dark'>
        {/* <Container> */}
        <Navbar.Brand className='nav-brand justify-content-start' href='#home'>
          <img style={{ width: "243px", height: "243px" }} src={Logo} alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          className='justify-content-end'
          id='responsive-navbar-nav'
        >
          <Nav>
            <Link style={currentTab(history, "/")} className='nav-link' to='/'>
              Home
            </Link>
            <Link
              style={currentTab(history, "/members")}
              className='nav-link'
              to='/members'
            >
              Members
            </Link>
            <Link style={currentTab(history, "/")} className='nav-link' to='/'>
              Events
            </Link>
            <Link style={currentTab(history, "/about")} className='nav-link' to='/about'>
              About us
            </Link>
            <Link style={currentTab(history, "/contact")} className='nav-link' to='/contact'>
              Contact us
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};

export default withRouter(Menu);
