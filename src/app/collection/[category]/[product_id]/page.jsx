import ProductPage from '@/layout/ProductPage';
import React from 'react'


async function  page ({ params }) {
  const { product_id } = await params;
 
  return (
    <>
        <ProductPage productId={product_id} />
    
    </>
  )
}

export default page

