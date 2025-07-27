import React from 'react';
import { Helmet } from 'react-helmet';
import dhiyalogo from "../assets/logo.svg";
const Home = () => (
  <>
    <Helmet>
      <title>Home | Dhiya Infotech</title>
      <meta name="description" content="Welcome to Dhiya Infotech – your one-stop solution for web design." />
      <meta name="keywords" content="web design, react, Dhiya Infotech, development" />
    </Helmet>
    <div className="container py-5 text-center align-items-center d-flex flex-column justify-content-center min-vh-50">
        <img src={dhiyalogo} alt="Logo" style={{height: 150}} className="my-5" />
    </div>
  </>
);

export default Home;
