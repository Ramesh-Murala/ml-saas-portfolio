import React from 'react';
import Navbar from '../common/Navbar';

const StoreLayout = ({ children }) => {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <Navbar />
      <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {children}
      </main>
    </div>
  );
};

export default StoreLayout;
