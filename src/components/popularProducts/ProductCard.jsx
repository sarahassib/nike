import React from 'react'
import star from '../../assets/icons/star.svg'

const ProductCard = ({ imgURL, rate, name, price }) => {
    return (
        <div className='flex flex-col gap-3'>
            <img src={imgURL} alt="shoe" />
            <div className="flex gap-2 text-gray-500 text-xl items-center">
                <img src={star} alt="starImage" /> ({rate})
            </div>
            <h2 className='font-semibold text-3xl md:text-xl xl:text-2xl'>{name}</h2>
            <span className='text-red-500 font-bold text-2xl'>{price}</span>
        </div>
    )
}

export default ProductCard