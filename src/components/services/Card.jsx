import React from 'react'

const Card = ({ imgURL, label, subtext }) => {
    return (
        <div className='py-12 px-6 rounded-2xl flex flex-col gap-4 shadow-md'>
            <div className="bg-red-500 w-12 h-12 flex justify-center items-center rounded-full">
                <img src={imgURL} alt={label} className='' />
            </div>
            <h2 className='text-2xl'>{label}</h2>
            <p className='text-gray-500'>{subtext}</p>
        </div>
    )
}

export default Card