import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/frontend_assets/logo.png'
export default function Footer() {
  return (
    <div className='mt-10'>
      <div className='mx-10'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-14'>
            <div className='flex flex-col gap-5 p-5'>
              <Image  src={logo} width={100} height={100} alt=''/>
              <p className='text-sm'>Lorem ipsum dolor  eos tempore architecto doloremque illo numquam natus totam illum iste minima corrupti odit neque assumenda accusamus, magnam ipsam dolore possimus explicabo vitae officia fuga sequi expedita! Ullam nostrum culpa numquam sequi modi quidem rem.</p>

            </div>
            <div  className='flex flex-col gap-5 p-5'>
              <h2 className='text-2xl font-bold'>Company</h2>
              <p className='text-sm'>Home</p>
              <p className='text-sm'>About Us</p>
              <p className='text-sm'>Delivery</p>
              <p className='text-sm'>Privacy policy</p>
            </div>
            <div  className='flex flex-col gap-5 p-5'>
              <h2 className='text-2xl font-bold'>Get In Touch</h2>
              <p className='text-sm'>+101023013</p>
              <p className='text-sm'>mdasiftaher2020@gmail.com</p>
            </div>
        </div>
        <hr />
        <div className='text-center py-3'>
         <p className='text-sm'>Copyrignt 2024@ forever.com - All Right Reserved</p>
        </div>
      </div>
    </div>
  )
}
