import React from 'react';

const Grid = ({ children }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
      {children}
    </div>
  );
};

export default Grid;
