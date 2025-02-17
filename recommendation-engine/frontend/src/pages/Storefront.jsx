import React from 'react';
import Grid from '../components/common/Grid';
import ProductCard from '../components/common/ProductCard';
import { useRecommendations } from '../hooks/useRecommendations';
import { mockProducts } from '../data/mockProducts';

const Storefront = () => {
  const { recommendations, loading } = useRecommendations('u1'); // Mock user u1

  return (
    <div>
      <h1>Welcome to SmartStore</h1>
      
      <h2>Recommended for You</h2>
      {loading ? (
        <p>Loading recommendations...</p>
      ) : (
        <Grid>
          {recommendations.map(product => (
            <ProductCard key={`rec-${product.id}`} product={product} />
          ))}
        </Grid>
      )}

      <h2 style={{ marginTop: '40px' }}>All Products</h2>
      <Grid>
        {mockProducts.map(product => (
          <ProductCard key={`all-${product.id}`} product={product} />
        ))}
      </Grid>
    </div>
  );
};

export default Storefront;
