// src/components/Header.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Button, Form } from "react-bootstrap";
import "./Header.css";
import logo from "../../public/logo-white.svg"; // Make sure this path is correct

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false); // Collapse menu after clicking a nav link
  };

  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);
  return (
    <header>
      {/* Top Header */}
      <Container>
        <div className="top-header py-1 px-3 bg-light text-dark small d-none d-lg-block">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <i className="fas fa-phone"></i> +91 96778 94466
              <span className="ms-3">
                <i className="fas fa-envelope me-2"></i> info@dhiyainfotech.com
              </span>
            </div>
            <div>
              <a href="https://www.facebook.com/DHIYAINFOTECHCOMPANY" className="text-dark me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/company/dhiya-infotech" className="text-dark me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/dhiyainfotech" className="text-dark me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com/%40Dhiya-Infotech" className="text-dark me-3">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Main Navbar */}
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className="custom-navbar"
        expanded={expanded}
        onToggle={(isExpanded) => setExpanded(isExpanded)}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="fw-bold text-white">
            <img src={logo} alt="Logo" height="35" className="me-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <NavLink
                to="/"
                end
                className="nav-link custom-nav-link px-3 mx-2"
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link custom-nav-link px-3 mx-2"
                onClick={handleNavLinkClick}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className="nav-link custom-nav-link px-3 mx-2"
                onClick={handleNavLinkClick}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link custom-nav-link px-3 mx-2"
                onClick={handleNavLinkClick}
              >
                Contact
              </NavLink>

              <Nav.Link
                onClick={handleShow}
                className="custom-nav-link px-3 mx-2"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Modal */}
      <Modal
        show={showLogin}
        onHide={handleClose}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;
