// Layout.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
        <main className='min-h-[90vh]'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
