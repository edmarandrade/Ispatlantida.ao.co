import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const Layout = ({ children }) => {
  return (
        <>
      <Navbar />
      <div style={{background: 'linear-gradient(180deg, transparent, #000000E6), url("img/DSC_0475.jpg") center center', backgroundSize: 'cover', height: '40vh'}} className="banner position-relative">
        <div style={{bottom: '1rem'}} className="px-3 px-md-5 px-xl-5 px-xxl-5  position-absolute">
        <h2 className="text-white f-30">Instituição</h2>
        </div>
      </div>
      {children}
        </>
  );
};

export default Layout;
