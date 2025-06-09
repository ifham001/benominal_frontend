"use client"

import { showNotification } from '@/store/slices/Notification';
import ProductForm from '@/ui/admin/product/ProductForm'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


function AddNewProduct() {
     const dispatch = useDispatch();

    const addNewProduct = async (productData)=> {

        const productDataWithImages = {
            ...productData,slug:productData.title,
            images: JSON.parse(localStorage.getItem('productImages')),
        };
        // console.log(productDataWithImages);
        const addNewProduct = await fetch('http://localhost:3004/add-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productDataWithImages),
        });
        if (!addNewProduct.ok) {
            const errorData = await addNewProduct.json();
            return dispatch(showNotification({
                message: errorData.message || 'Failed to add product. Please try again.',
                type: 'error',
            }));
        }
        
        localStorage.removeItem('productImages'); // Clear images after successful upload
        const responseData = await addNewProduct.json();
        console.log(responseData);
        dispatch(showNotification({
            message: 'Product added successfully!',
            type: 'success',
        }));


    }






    const onSaveImages = async (newImages) => {
        if(localStorage.getItem('productImages')){
            return dispatch(showNotification({
                message: 'Images already uploaded for this product.',
                type: 'error',
            }));
        }
        const uploadImages = async (images) => {
            
          const formData = new FormData();
      
          // Append image files to FormData (max 3)
          images.slice(0, 3).forEach((imageFile) => {
            formData.append('images', imageFile); // 'images' must match multer field name
            // 'images' must match multer field name
          });
      
          try {
            const response = await fetch('http://localhost:3004/upload-images', {
              method: 'POST',
              body: formData, // Don't set Content-Type manually
            });
      
            if (!response.ok) {
                
              return dispatch(showNotification({
                message: 'Image upload failed. Please try again.',
                type: 'error',  
              }))
            }
            
      
            const result = await response.json();
            
      
            dispatch(showNotification({
              message: 'Images uploaded successfully!',
              type: 'success',
            }));
      
            return result.urls
      
          } catch (error) {
            // console.error('Image upload error:', error);
            // dispatch(showNotification({
            //   message: "hi",
            //   type: 'error',
            // }));
            return [];
          }
        };
      
        const uploadedUrls = await uploadImages(newImages);
      
        // Update the state only if upload was successful
        if (uploadedUrls.length > 0) {
          localStorage.setItem('productImages', JSON.stringify(uploadedUrls));
          
        }
      };
      
  return (
    <>
        <ProductForm 
            productData={addNewProduct}
            onSaveImages={onSaveImages} />
       
    
    </>
  )
}

export default AddNewProduct