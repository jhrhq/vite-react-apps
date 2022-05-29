import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Link to="/home" className="navbar-brand">
          <span className="fs-4 fw-bold">Monitor</span> Review
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/reviews" className="nav-link">
              Reviews
            </Link>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/blogs" className="nav-link">
              Blogs
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
