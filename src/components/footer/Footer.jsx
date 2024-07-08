import React from 'react'
import { footerLogo } from '../../assets/images'
import { footerLinks, socialMedia } from '../../constants'
import { copyrightSign } from '../../assets/icons'

const Footer = () => {
  return (
    <footer className='pt-24 bg-black text-slate-100'>
      <div className="container mx-auto px-4">
        <div className='gap-20 flex-wrap flex justify-between pb-9'>
          <div className="flex flex-col gap-5">
            <img src={footerLogo} alt="logo" className='w-36' />
            <p className='md:text-lg md:max-w-lg'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
            <div className="flex items-center gap-4">
              {
                socialMedia.map((social, idx) => {
                  return (
                    <div key={idx} className='w-12 h-12 flex justify-center items-center bg-white rounded-full'>
                      <img src={social.src} alt={social.alt} />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="flex flex-1 justify-between gap-8 xl:gap-0 flex-wrap">
            {
              footerLinks.map((link, idx) => {
                return (
                  <div key={idx} className="flex flex-wrap flex-col gap-5">
                    <h2 className='font-bold text-xl'>{link.title}</h2>
                    <ul className='flex flex-col flex-wrap gap-3'>
                      {
                        link.links.map((link, idx) => {
                          return <li key={idx} className='text-gray-500 font-montserrat'>{link.name}</li>
                        })
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="py-9 flex justify-between items-center lg:flex-row flex-col gap-2 font-montserrat text-gray-500">
          <p className='flex items-center gap-2'><img src={copyrightSign} alt="copyRightSign" />Copyright. All rights reserved.</p>
          <h5 className='text-red-500 font-bold'>Made by Elsayed Kewan</h5>
          <h6>Terms & Conditions</h6>
        </div>
      </div>

    </footer>
  )
}

export default Footer