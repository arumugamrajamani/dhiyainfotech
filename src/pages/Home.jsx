import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => (
  <>
    <Helmet>
      <title>Home | Dhiya Infotech</title>
      <meta name="description" content="Welcome to Dhiya Infotech – your one-stop solution for web design." />
      <meta name="keywords" content="web design, react, Dhiya Infotech, development" />
    </Helmet>
    <div className="container py-5">
      <h1>Welcome to Dhiya Infotech</h1>
      <p>This is the homepage.</p>
    </div>
  </>
);

export default Home;
