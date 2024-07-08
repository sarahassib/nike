import React from 'react'
import { star } from '../../assets/icons'

const Card = ({ imgURL, customerName, feedback, rating }) => {
    return (
        <div className='flex flex-col items-center gap-5 text-center'>
            <img src={imgURL} alt="customer image" className='w-28 h-28 rounded-full' />
            <p className='text-gray-500 md:text-lg md:max-w-md'>{feedback}</p>
            <div className='flex items-center gap-2 text-gray-500 text-xl'>
                <img src={star} alt="star" />
                ({rating})
            </div>
            <h2 className='text-2xl font-bold'>{customerName}</h2>
        </div>
    )
}

export default Card