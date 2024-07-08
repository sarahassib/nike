import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../../constants'



const PopularProducts = () => {


  const shoes = products.map((shoe, idx) => {
    return <ProductCard key={idx} {...shoe} />
  })


  return (
    <div className='pt-24'>
      <div className="container mx-auto px-4">
        <h1 className='capitalize text-4xl mb-4 font-bold'>our <span className='text-red-500'>popular</span> products</h1>
        <p className='text-gray-500 mb-12 md:max-w-xl md:text-lg'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {shoes}
        </div>
      </div>
    </div>
  )
}

export default PopularProducts