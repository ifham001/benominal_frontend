"use client"
import React, { useEffect,useState } from 'react'
import bracelets from '../../public/collection/bracelet.jpg'
import earrings from '../../public/collection/earing.jpg'
import necklaces from '../../public/collection/necklace.jpg'
import rings from '../../public/hero/hero-banner2.png'
import CollectionHeader from '@/ui/collection/CollectionHeader'
import ProductsGrid from '@/ui/product/ProductsGrid'
import SortByDropdown from '@/ui/SortByDropDown'
import { showNotification } from '@/store/slices/Notification'
import { useDispatch } from 'react-redux'


const categoryImages = {
  bracelets,
  earrings,
  necklaces,
  rings
}

export default function CollectionPage({ category }) {
  
  const dispatch = useDispatch()
  const [products,setProducts] = useState([])
  const img = categoryImages[category]

  if (!img) {
    return <div>Category not found</div>
  }
useEffect(() => {
    const fetchcollection = async () => {
      try {
        const response = await fetch(`http://localhost:3004/collection/${category}`)
        if (!response.ok) {
         return dispatch(showNotification({
            message: 'Failed to fetch collection. Please try again later.',
            type: 'error',
          }))
        }
        const data = await response.json()
        setProducts(data.products)
        
      } catch (error) {
        return dispatch(showNotification({
          message: 'An error occurred while fetching the collection. Please try again later.',
          type: 'error',
        }))
      }
    }
    try {
      fetchcollection()
    } catch (error) {
      return dispatch(showNotification({
        message: 'An error occurred while fetching the collection. Please try again later.',
        type: 'error',
      }))
    }
   
}, [category])
  return (
    <>
      <CollectionHeader title={category} img={img} />
      <SortByDropdown />
      <ProductsGrid products={products} />
    </>
  )
}
