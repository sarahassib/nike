import React from 'react'
import { offer } from '../../assets/images'
import Button from '../Button'
import { arrowRight } from '../../assets/icons'

const SpecialOffer = () => {
    return (
        <div className='pt-24'>
            <div className="container mx-auto px-4 flex flex-col-reverse gap-12 justify-between lg:flex-row lg:items-center">
                <div className="flex-1">
                    <img src={offer} alt="offer" className='w-full object-cover' />
                </div>
                <div className="flex flex-col flex-1">
                    <h1 className='capitalize text-4xl mb-4 font-bold'>
                        <span className='text-red-500'>special</span>
                        Offer
                    </h1>
                    <p className='text-gray-500 mb-5 md:text-lg'>
                        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
                    </p>
                    <p className='text-gray-500 mb-5 md:text-lg'>
                        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button label='Shop now' isRed={true} arrow={arrowRight} />
                        <Button label='learn more' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffer