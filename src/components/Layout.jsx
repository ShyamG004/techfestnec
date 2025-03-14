import React from 'react';
import { Navbar } from './Navbar/Navbar';
import Footer from './Footer';

export const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <main className="layout-content">{children}</main>
      <Footer />
    </div>
  );
};
