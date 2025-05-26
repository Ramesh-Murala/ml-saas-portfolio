import React from 'react';

const Card = ({ children, title }) => (
  <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
    {title && <h2 style={{ marginTop: 0, borderBottom: '1px solid #eee', paddingBottom: '10px' }}>{title}</h2>}
    {children}
  </div>
);

export default Card;
