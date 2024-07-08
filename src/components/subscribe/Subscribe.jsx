import React from 'react'
import Button from '../Button'

const Subscribe = () => {
    return (
        <div className='pb-24'>
            <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center">
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold lg:max-w-xl lg:leading-tight text-center'>Sign Up for <span className='text-red-500'>Updates</span> & Newsletter</h1>
                <div className="flex items-center flex-col w-full lg:w-fit lg:flex-row relative lg:border lg:border-gray-500 p-0 lg:p-3 rounded-full gap-4">
                    <input type='email' placeholder='subscribe@nike.com' className='focus:outline-none border border-gray-500 rounded-full px-3 py-4 lg:border-none lg:py-0 w-full lg:w-96 pl-4' />
                    <Button label='Sign Up' isRed={true} fullWidth={true} />
                </div>
            </div>
        </div>
    )
}

export default Subscribe