import CollectionHeader from '@/ui/collection/CollectionHeader'
import React from 'react'
import img from '../../../../public/hero/hero-banner2.png'
import ProductsGrid from '@/ui/product/ProductsGrid'
import SortByDropdown from '@/ui/SortByDropDown'


function page() {
  return (
    <>
    <CollectionHeader 
      title={'rings'}
      img={img}
      />
      <SortByDropdown/>
    <ProductsGrid/>
    
    </>
  )
}

export default page