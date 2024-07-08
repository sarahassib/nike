import React from 'react'
import { reviews } from '../../constants'
import Card from './Card'

const Testimonials = () => {
    return (
        <div className='py-24 my-24 bg-[#f5f6ff]'>
            <div className="container mx-auto px-4 text-center">
                <h1 className='text-4xl font-bold mb-5'>What Our <span className='text-red-500'>Customers</span> Say?</h1>
                <p className='text-gray-500 md:text-lg md:max-w-lg md:mx-auto mb-16 md:mb-24'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
                <div className="flex flex-col gap-10 md:flex-row md:justify-evenly">
                    {
                        reviews.map((review, idx) => {
                            return (
                                <Card key={idx} {...review} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonials