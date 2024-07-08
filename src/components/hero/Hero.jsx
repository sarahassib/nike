import React from 'react'
import Navbar from '../navbar/Navbar'
import arrow from '../../assets/icons/arrow-right.svg'
import collectionBackground from '../../assets/images/collection-background.svg'
import { shoes } from '../../constants'
import { thumbnailBackground } from '../../assets/images'
import Button from '../Button'


const Hero = () => {

  const [currShoe, setCurrShoe] = React.useState(shoes[0].bigShoe)


  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center">
        <div className="container mx-auto font-montserrat flex flex-col lg:flex-row  gap-8">
          <div className="flex flex-col gap-8 lg:w-2/5 justify-center pt-28 lg:p-0 px-4">
            <h4 className='text-red-500 text-xl pr-5'>Our Summer collections</h4>
            <h1 className='text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold '>
              <span className='lg:bg-white lg:whitespace-nowrap lg:relative lg:z-50 lg:pr-9 py-4'>The New Arrival</span> <br />
              <div className='lg:whitespace-nowrap lg:bg-white lg:relative lg:z-50 lg:pr-9 inline-block md:mt-6'>
                <span className='text-red-500'>Nike</span> Shoes
              </div>
            </h1>
            <p className='text-gray-500 text-lg'>Discover stylish Nike arrivals, quality <br /> comfort, and innovation for your active life.</p>
            <Button label='Shop now' isRed={true} arrow={arrow} />
            <div className="flex justify-between md:justify-start gap-0 md:gap-16">
              <div className='flex flex-col items-center'>
                <h1 className='font-bold text-3xl md:text-5xl font-palanquin'>1k+</h1>
                <span className='font-montserrat text-gray-500 mt-1 block'>Brands</span>
              </div>
              <div className='flex flex-col items-center'>
                <h1 className='font-bold text-3xl md:text-5xl font-palanquin'>500+</h1>
                <span className='font-montserrat text-gray-500 mt-1 block'>Shops</span>
              </div>
              <div className='flex flex-col items-center'>
                <h1 className='font-bold text-3xl md:text-5xl font-palanquin'>250k+</h1>
                <span className='font-montserrat text-gray-500 mt-1 block'>Customers</span>
              </div>
            </div>
          </div>
          <div className="flex flex-1 relative z-10 justify-center items-center bg-cover bg-center min-h-screen w-full pb-14 lg:p-0" style={{ backgroundImage: `url(${collectionBackground})` }}>
            <img src={currShoe} alt="shoe" />
            <div className="grid grid-cols-3 gap-4 px-5 w-full justify-center absolute z-40 bottom-0 left-2/4 -translate-x-2/4 translate-y-1/3">
              {
                shoes.map((shoe, idx) => {
                  return (
                    <div key={idx} className="flex justify-center">
                      <div onClick={() => { setCurrShoe(shoe.bigShoe) }} className={`cursor-pointer sm:w-40 sm:h-40 flex justify-center items-center bg-center bg-cover rounded-lg max-sm:p-4 ${currShoe === shoe.bigShoe && 'border-2 border-red-500'}`} style={{ backgroundImage: `url(${thumbnailBackground})` }}>
                        <img src={shoe.bigShoe} alt="" width={127} className='w-full sm:w-32 rounded-lg object-cover' />
                      </div>
                    </div>

                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero