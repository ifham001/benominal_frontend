import React from 'react';
import ProductSubDisplay from './ProductSubDisplay';
import Link from 'next/link';

function ProductsGrid({products}) {
  return(
    <div className="px-4 py-6">
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 justify-items-center">
{products.map((product, index) => { 
      return  <Link href={`/collection/${product.category}/${product._id}`} key={product._id || index} className="w-full">
          <ProductSubDisplay
            key={product._id || index}
            id={product._id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={"https://storage.googleapis.com/benominal/products/09f1319a-f887-4cda-8f68-1dac64e0cf86-Frame%2026086383.jpg"}
            color={product.color}
          />
          </Link>
}
        )}
      </div>
    </div>
  );
}

export default ProductsGrid;
