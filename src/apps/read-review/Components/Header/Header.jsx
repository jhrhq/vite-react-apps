import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

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
            {/* <Link to="/" className="nav-link ">
              Home
            </Link> */}
            <CustomLink to="/" className="nav-link">
              Home
            </CustomLink>
            <CustomLink to="/reviews" className="nav-link">
              Reviews
            </CustomLink>
            <CustomLink to="/dashboard" className="nav-link">
              Dashboard
            </CustomLink>
            <CustomLink to="/blogs" className="nav-link">
              Blogs
            </CustomLink>
            <CustomLink to="/about" className="nav-link">
              About
            </CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
