import React from 'react'

const Button = ({ isRed, label, arrow, fullWidth }) => {
    return (
        <button
            className={`px-8 py-3 rounded-full text-nowrap ${isRed ? 'bg-red-500 text-white' : 'bg-transparent border border-gray-500 text-gray-500'} flex items-center w-fit gap-3 text-lg ${fullWidth && 'w-full justify-center lg:w-fit lg:justify-start'}`}>
            {label} {arrow && <img src={arrow} alt="arrow right" />}
        </button>
    )
}

export default Button