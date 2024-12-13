import React from 'react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p><strong>${product.price}</strong></p>
      <button onClick={() => addToCart(product)} style={{ padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
