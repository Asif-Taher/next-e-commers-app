'use client'
import CartTotal from '@/components/Cart/CartTotal'
import Title from '@/components/Home/Title'
import { context } from '@/context/ContextProvider'
import { assets } from '@/public/assets/frontend_assets/assets'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

export default function page() {
  const [method, setMethod] = useState("cod");
  const {router} = useContext(context)
  return (
    <div className='mt-5'>
      <div className='mx-10 flex flex-col justify-between  gap-4 sm:flex-row pt-5 sm:pt-14 min-h-[80vh]'>
        <div className='w-full'>
          <div>
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>

          <div className=' flex flex-col gap-3'>
            <div className='flex gap-2'>
              <input type="text" placeholder='name' className='border py-1 px-2 rounded-sm w-full' />
              <input type="text" placeholder='last name' className='border py-1 px-2 w-full' />
            </div>
            <div>
              <input type="email" placeholder='Enter email' className='border py-1 px-2 rounded-sm w-full' />
            </div>
            <div className='w-full'>
              <input type="text" placeholder='Street' className='border py-1 px-2 rounded-sm w-full' />
            </div>

            <div className='flex gap-2'>
              <input type="text" placeholder='city' className='border py-1 px-2 rounded-sm w-full' />
              <input type="text" placeholder='State' className='border py-1 px-2 rounded-sm w-full' />
            </div>
            <div className='flex  gap-2'>
              <input type="text" placeholder='zipcode' className='border py-1 px-2 rounded-sm w-full' />
              <input type="text" placeholder='country' className='border py-1 px-2 rounded-sm w-full' />
            </div>

            <div>
              <input type="number" placeholder='Phone' className='border py-1 px-2 rounded-sm w-full' />
            </div>
          </div>
        </div>
        {/* right section */}
        <div className='w-full'>
          <div>
            <CartTotal />
          </div>
          <div className='ml-[5.75rem] mt-4'>
            <div>
              <Title text1={"PAYMENT"} text2={"METHOD"} />
            </div>
            {/* Payment method secton */}
            <div className='flex gap-4'>
              <div onClick={() => setMethod("stripe")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-sm'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? "bg-green-500" : ""}`}></p>
                <Image className='h-5 mx-5' src={assets.stripe_logo} alt='stripe' />
              </div>
              <div onClick={() => setMethod("razorpay")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-sm'>
                <p className={`min-w-3.5 h-3.5 border rounded-full  ${method === 'razorpay' ? "bg-green-500" : ""}`}></p>
                <Image className='h-5 mx-5' src={assets.razorpay_logo} alt='stripe' />
              </div>
              <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-sm'>
                <p className={`min-w-3.5 h-3.5 border rounded-full  ${method === 'cod' ? "bg-green-500" : ""}`}></p>
                <p className='text-sm font-medium'>CASH ON DELIVERY</p>
              </div>
            </div>

          </div>
          {/* place order button */}
          <div className=' mx-10 flex justify-end mt-4'>
            <button
              onClick={()=> router.push('/order')}
              className='py-2 px-5 bg-black text-white rounded-md active:bg-gray-700'
            >
              PLACE ORDER
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
