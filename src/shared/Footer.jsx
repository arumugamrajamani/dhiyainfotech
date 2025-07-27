import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white py-4 mt-5">
    <Container className="text-center">
      <p>&copy; 2025 Dhiya Infotech. All rights reserved.</p>
      <div>
        <a href="#" className="text-white me-3"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
      </div>
    </Container>
  </footer>
);

export default Footer;
