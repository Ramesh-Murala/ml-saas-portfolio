import React from 'react';

const Button = ({ onClick, children, disabled, type = 'button' }) => (
  <button 
    type={type}
    onClick={onClick} 
    disabled={disabled}
    style={{ 
      backgroundColor: disabled ? '#ccc' : '#007bff', 
      color: 'white', 
      border: 'none', 
      padding: '10px 20px', 
      borderRadius: '4px', 
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontSize: '16px'
    }}
  >
    {children}
  </button>
);

export default Button;
