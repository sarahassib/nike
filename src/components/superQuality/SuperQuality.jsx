import React from 'react'
import Button from '../Button'
import { shoe8 } from '../../assets/images'

const SuperQuality = () => {
    return (
        <div className='pt-24'>
            <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                <div className='flex flex-col'>
                    <h1 className='capitalize text-4xl mb-4 font-bold'>we provide you <span className='text-red-500'>super quality</span> shoes</h1>
                    <p className='text-gray-500 mb-5 md:max-w-xl md:text-lg'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                    <p className='text-gray-500 mb-5 md:max-w-xl md:text-lg'>Our dedication to detail and excellence ensures your satisfaction</p>
                    <Button label='View details' isRed={true} />
                </div>
                <div className="flex justify-center">
                    <img src={shoe8} alt="shoe" />
                </div>
            </div>
        </div>
    )
}

export default SuperQuality