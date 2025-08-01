import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white py-4 mt-5">
    <Container className="text-center">
      <p>&copy; 2025 Dhiya Infotech. All rights reserved.</p>
      <div>
        <a href="https://www.facebook.com/DHIYAINFOTECHCOMPANY" className="text-white me-3"><i className="fab fa-facebook"></i></a>
        <a href="https://www.linkedin.com/company/dhiya-infotech" className="text-white me-3"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/dhiyainfotech" className="text-white me-3"><i className="fab fa-instagram"></i></a>
        <a href="https://youtube.com/%40Dhiya-Infotech" className="text-white me-3"><i className="fab fa-youtube"></i></a>
      </div>
    </Container>
  </footer>
);

export default Footer;
