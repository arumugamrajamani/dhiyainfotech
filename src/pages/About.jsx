import React from 'react';
import { Helmet } from 'react-helmet';
import Features from '../shared/Features'; // Assuming you have a Features component

const About = () => (
  <>
    <Helmet>
      <title>About | Dhiya Infotech</title>
      <meta name="description" content="Welcome to Dhiya Infotech – your one-stop solution for web design." />
      <meta name="keywords" content="web design, react, Dhiya Infotech, development" />
    </Helmet>
    <div className="container py-5 shadow-sm">
      <h2>About Us</h2>
      <p>Dhiya Infotech is a leading web design and development company, dedicated to delivering high-quality digital solutions.</p>
      <p>Our team of experts specializes in creating stunning websites that not only look great but also perform exceptionally well.</p>
      <p>We believe in innovation, creativity, and excellence in every project we undertake.</p>
    </div>
    <Features></Features>
  </>
);

export default About;