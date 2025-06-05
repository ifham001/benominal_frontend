import React from 'react';
import ProductSubDisplay from './ProductSubDisplay';
import necklace from '../../../public/collection/necklace.jpg';
import neck from '../../../public/collection/neck.png';

function ProductsGrid() {
  const products = [
    {
      title: 'Star Choker',
      price: 599,
      description: 'Trendy the human body is made star-shaped choker necklace',
      image: neck,
      color: 'rose gold',
    },
    {
      title: 'Angel Chain',
      price: 499,
      description: 'Simple angelic chain with fine finish',
      image: necklace,
      color: 'gold',
    },
    {
      title: 'Star Choker',
      price: 599,
      description: 'Trendy the human body is made star-shaped choker necklace',
      image: neck,
      color: 'rose gold',
    },
    {
      title: 'Angel Chain',
      price: 499,
      description: 'Simple angelic chain with fine finish',
      image: necklace,
      color: 'gold',
    },
    {
      title: 'Star Choker',
      price: 599,
      description: 'Trendy the human body is made star-shaped choker necklace',
      image: neck,
      color: 'rose gold',
    },
    {
      title: 'Angel Chain',
      price: 499,
      description: 'Simple angelic chain with fine finish',
      image: necklace,
      color: 'gold',
    },
  ];

  return (
    <div className="px-4 py-6">
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 justify-items-center">
{products.map((product, index) => (
          <ProductSubDisplay
            key={index}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
            color={product.color}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsGrid;
