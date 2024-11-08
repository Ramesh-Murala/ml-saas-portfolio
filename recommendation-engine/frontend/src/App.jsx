import React from 'react';
import StoreLayout from './components/layout/StoreLayout';
import Storefront from './pages/Storefront';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <StoreLayout>
        <Storefront />
      </StoreLayout>
    </CartProvider>
  );
}

export default App;
