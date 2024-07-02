import React from 'react'

const Button = ({ children, ...props }) => {
  return (
    <button style={{ padding: '0.5rem 1rem', cursor: 'pointer', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }} {...props}>
      {children}
    </button>
  )
}

export default Button
