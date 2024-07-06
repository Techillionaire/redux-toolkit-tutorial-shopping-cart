// // Layout.jsx
// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';


// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Navbar />
//         <main className='min-h-[90vh]'>{children}</main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Checkout from '../components/Checkout';
import { useSelector } from 'react-redux';

const Layout = () => {
  const { isOpen } = useSelector(state => state.checkout);
  return (
    <div>
      <Navbar />
      <main className='bg-slate-50 min-h-[100vh] pt-[70px]'>
        <Outlet />
      </main>
      {isOpen && <Checkout />} {/* Render Checkout here */}
      <Footer />
    </div>
  );
};

export default Layout;