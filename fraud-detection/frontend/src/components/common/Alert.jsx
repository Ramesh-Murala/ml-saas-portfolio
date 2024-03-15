import React from 'react';

const Alert = ({ type, message }) => {
  const isError = type === 'error';
  const bgColor = isError ? '#fee2e2' : '#dcfce7';
  const textColor = isError ? '#991b1b' : '#166534';
  
  return (
    <div style={{ padding: '1rem', borderRadius: '4px', background: bgColor, color: textColor, margin: '1rem 0' }}>
      {message}
    </div>
  );
};

export default Alert;
