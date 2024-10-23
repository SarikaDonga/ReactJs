import React from 'react';
import ProductCard from './ProductCard';

const CosmeticProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Lipstick',
      description: 'Matte finish, long-lasting lipstick.',
      price: 19.99,
      image: 'https://example.com/lipstick.jpg',
    },
    {
      id: 2,
      name: 'Foundation',
      description: 'Smooth finish, all-day wear foundation.',
      price: 29.99,
      image: 'https://example.com/foundation.jpg',
    },
    {
      id: 3,
      name: 'Mascara',
      description: 'Volumizing mascara for fuller lashes.',
      price: 14.99,
      image: 'https://example.com/mascara.jpg',
    },
    {
      id: 4,
      name: 'Eyeshadow Palette',
      description: 'Colorful, blendable eyeshadow palette.',
      price: 24.99,
      image: 'https://example.com/eyeshadow.jpg',
    },
    {
      id: 5,
      name: 'Blush',
      description: 'Natural glow blush for rosy cheeks.',
      price: 12.99,
      image: 'https://example.com/blush.jpg',
    },
    {
      id: 6,
      name: 'Primer',
      description: 'Long-lasting, smooth base primer.',
      price: 18.99,
      image: 'https://example.com/primer.jpg',
    },
    {
      id: 7,
      name: 'Concealer',
      description: 'Full coverage concealer for flawless look.',
      price: 15.99,
      image: 'https://example.com/concealer.jpg',
    },
    {
      id: 8,
      name: 'Highlighter',
      description: 'Shimmering highlighter for glowing skin.',
      price: 22.99,
      image: 'https://example.com/highlighter.jpg',
    },
    {
      id: 9,
      name: 'Setting Spray',
      description: 'Keeps your makeup in place all day.',
      price: 16.99,
      image: 'https://example.com/spray.jpg',
    },
    {
      id: 10,
      name: 'Lip Balm',
      description: 'Hydrating lip balm for smooth lips.',
      price: 9.99,
      image: 'https://example.com/balm.jpg',
    },
  ];

  return (
    <div style={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default CosmeticProducts;
