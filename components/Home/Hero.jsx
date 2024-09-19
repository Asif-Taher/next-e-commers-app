import Image from 'next/image'
import React from 'react'
import heroImage from '@/public/assets/frontend_assets/hero_img.png'
export default function Hero() {
  return (
    <div className='mt-5'>
        <div className='mx-10 grid grid-cols-1  lg:flex lg:items-center border lg:justify-between'>
            <div className='lg:basis-[48%]  ml-24 p-6'>
                <div className='flex gap-2 items-center mb-5'>
                    <p className='h-1 w-10 bg-gray-400'></p>
                    <p className='font-medium text-2xl'>Our  bestseller</p>
                </div>
                <h2 className='lg:text-6xl text-3xl mb-6 font-bold'>Latest Arrivals</h2>
                <div className='flex gap-2 items-center'>
                    <p className='text-2xl'>Shop Now</p>
                    <p className='h-1 w-10 bg-gray-400'></p>

                </div>
            </div>
            <div className='basis-[48%] w-full'> 
               <Image src={heroImage}  alt=''/>
            </div>
        </div>
    </div>
  )
}
