import Image from 'next/image'
import React from 'react'
import { assets } from '@/public/assets/frontend_assets/assets'
export default function OurPolicy() {
  return (
    <div className='mt-10'>
      <div className='mx-10 py-10 flex flex-col lg:flex-row lg:justify-between gap-5'>
        <div className='flex flex-col items-center'>
            <Image src={assets.exchange_icon} alt='' className='w-12  mb-3'/>
            <p className='font-semibold'>Easy Exchange OurPolicy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div className='flex flex-col items-center'>
            <Image src={assets.quality_icon} alt='' className='w-12 mb-3'/>
            <p className='font-semibold'>Easy Exchange OurPolicy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div className='flex flex-col items-center'>
            <Image src={assets.support_img} alt='' className='w-12  mb-3'/>
            <p className='font-semibold'>Easy Exchange OurPolicy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
      </div>
    </div>
  )
}
