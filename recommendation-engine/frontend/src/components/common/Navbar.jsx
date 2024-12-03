import React from 'react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav style={{ padding: '20px', background: '#333', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
      <h2>SmartStore</h2>
      <div>Cart: {cart.length} items</div>
    </nav>
  );
};

export default Navbar;
