import CollectionPage from '@/layout/CollectionPage'
import React from 'react'

export default async function Page({ params }) {
    const { category } = await params;
  return (
    <>
      <CollectionPage category={category} />
    </>
  )
}
