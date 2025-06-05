import CollectionHeader from '@/ui/collection/CollectionHeader'
import React from 'react'
import img from '../../../../public/collection/earing.jpg'
import ProductsGrid from '@/ui/product/ProductsGrid'
import SortByDropdown from '@/ui/SortByDropDown'


function page() {
  return (
    <>
    <CollectionHeader 
      title={'earrings'}
      img={img}
      />
      <SortByDropdown/>
    <ProductsGrid/>
    
    </>
  )
}

export default page