import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import '../styles/Layout.css'; // custom layout CSS

const MainLayout = ({ children }) => (
  <div className="app-wrapper d-flex flex-column min-vh-100">
    <Header />
    <main className="flex-grow-1">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
