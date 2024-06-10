import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Meu Site</h1>
        <nav>
          <ul>
          
          </ul>
        </nav>
      </header>


      <main>{children}</main>
    </div>
  );
};

export default Layout;
