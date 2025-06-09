"use client"
import { showNotification } from '@/store/slices/Notification'
import ProductMainPage from '@/ui/product/ProductMainPage'
import React, {  useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'



function ProductPage({productId}) {
    
    const dispatch = useDispatch()
    const [productData,setProductData]= useState([])
    useEffect(()=>{
      
    const fetchProduct = async (productId) => {
       
      try {
        const response = await fetch(`http://localhost:3004/products/${productId}`)
        if (!response.ok) {
         return dispatch(showNotification({
          type: 'error',
          message: 'Failed to fetch product data. Please try again later.',
        }))
        }
        const data = await response.json()
        
        console.log(data)
        setProductData(data.product)
        // Handle the product data as needed
      } catch (error) {
        return dispatch(showNotification({
          type: 'error',
          message: 'An error occurred while fetching product data.',
        }))
      }}
      try {
        fetchProduct(productId)
      } catch (error) {
        return dispatch(showNotification({
          type: 'error',
          message: 'An error occurred while fetching product data.',
        }))
      }
    
    
    },[productId] )
    const addToCart = (productId) => {}
    const buyNow = (productId) => {}
  return (
   <>
   
    <ProductMainPage
            addToCart={addToCart}
            buyNow={buyNow}
            price={productData.price}
            title={productData.title}
            description={productData.description}
            images={productData.images}
            stocksQuantity={productData.stocksQuantity}
            productId={productData._id} />

   </>
  )
}

export default ProductPage