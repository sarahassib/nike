import React from 'react'
import { services } from '../../constants'
import Card from './Card'

const Services = () => {
    return (
        <div className='pt-24'>
            <div className="container mx-auto px-4 gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                    {
                        services.map((service, idx) => {
                            return (
                                <Card key={idx} {...service} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services