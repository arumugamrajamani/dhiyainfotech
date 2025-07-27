import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Contact = () => (
  <>
    <Helmet>
      <title>Contact | Dhiya Infotech</title>
      <meta name="description" content="Welcome to Dhiya Infotech – your one-stop solution for web design." />
      <meta name="keywords" content="web design, react, Dhiya Infotech, development" />
    </Helmet>


    <div className="contact-page py-5">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h2 className="fw-bold mb-3">Get in Touch</h2>
            <p className="text-muted">
              We'd love to hear from you! Fill out the form and we'll get back to you as soon as possible.
            </p>
          </Col>
        </Row>

        <Row>
          {/* Contact Form */}
          <Col md={6}>
            <Card className="shadow-sm border-0 p-4">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Type your message..." />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>

          {/* Contact Info */}
          <Col md={6} className="mt-4 mt-md-0">
            <Card className="bg-light border-0 shadow-sm p-4 h-100">
              <h5 className="fw-bold mb-3">Contact Information</h5>
              <p><i className="fas fa-map-marker-alt me-2 text-primary"></i>#66, 2nd Main, 2nd cross, A.P.K road, 2nd Block, Thyagaraja Nagar, Bengaluru, Karnataka 560028, Bangalore, India, 560028</p>
              <p><i className="fas fa-phone me-2 text-primary"></i>+91 96778 94466</p>
              <p><i className="fas fa-envelope me-2 text-primary"></i>info@dhiyainfotech.com</p>
              <div className="mt-4">
                {/* <a href="#" className="me-3 text-primary fs-4"><i className="fab fa-facebook"></i></a>
                <a href="#" className="me-3 text-primary fs-4"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-primary fs-4"><i className="fab fa-linkedin"></i></a> */}

                <a href="https://www.facebook.com/DHIYAINFOTECHCOMPANY" className="text-primary me-3"><i className="fab fa-facebook"></i></a>
                <a href="https://www.linkedin.com/company/dhiya-infotech" className="text-primary me-3"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/dhiyainfotech" className="text-primary me-3"><i className="fab fa-instagram"></i></a>
                <a href="https://youtube.com/%40Dhiya-Infotech" className="text-primary me-3"><i className="fab fa-youtube"></i></a>

              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="container pt-5">
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.587678415022!2d77.56996680000002!3d12.934201400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b2e076add1%3A0x9639684ba219c146!2sDhiya%20infotech!5e0!3m2!1sen!2sin!4v1753603042762!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>

  </>
);

export default Contact;