"use client"
import ProductSubDisplayAdmin from '@/ui/admin/product/ProductSubDisplayAdmin'
import React from 'react'
import necklace from '../../../public/collection/neck.png';
import { useDispatch } from 'react-redux';
import { showNotification } from '@/store/slices/Notification';




function ManageProducts() {
  const dispatch =useDispatch()

  const onAddStock= async (dataa)=>{
    const confirmed = window.confirm(`Are you sure you want to add ${dataa.stocksQuantity} unit to this product?`);
    if (!confirmed) return;
    
    
      const response = await fetch('http://localhost:3005/edit-product',
      {
        method:"POST",
        body:JSON.stringify({stocksQuantity:2,productId:"6836312372de8564d52cc55f"}),
        headers:{
          "Content-Type":"application/json"
        }
      }
      )
      if(!response.ok){
         dispatch(showNotification({
          message:"Try again something went wrong",
          type:"error"
        }))
      }
      const data = response.json()
      console.log(data)
      if(data){
        return dispatch(showNotification
          ({message:"Stocks add Sucessfully", type:"sucess"}))
      }
    
  }
  const onDeleteProduct =( productId)=>{
    const confirmed = window.confirm('Are you sure you want to delete this product?');
    if (!confirmed) return;

    const deleteProduct = async ()=>{
      try {
      const response= await fetch(`http://localhost:3005/delete-product/${productId}`,
        {method:"DELETE"})
        if(!response.ok){
          return dispatch(showNotification({message:"something went wrong",type:'fail'}))
        }
        const data = response.json()
        if(data){
          return dispatch(showNotification({message:"Item Delete sucessfully",type:'sucess'}))
 
        }
      } catch (error) {
        return dispatch(showNotification({message:"something went wrong",type:"error"}))
      }
    }
    try {
      deleteProduct()
    } catch (error) {
      return dispatch(showNotification({message:"something went wrong",type:"error"}))
    }

  }
  return (
    <>
    <ProductSubDisplayAdmin
            productId={1}
            title="Gold Plated Ring"
            price={899}
            stock={12}
            color="Gold"
            image={necklace}
            onAddStock={onAddStock}
            onDelete={onDeleteProduct}
    />
      <ProductSubDisplayAdmin

            title="Gold Plated Ring"
            price={899}
            stock={12}
            color="Gold"
            image={necklace}
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
    />

    
    
    </>
  )
}

export default ManageProducts