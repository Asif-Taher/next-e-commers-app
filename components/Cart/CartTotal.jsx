'use client'
import React, { useContext } from 'react'
import Title from '../Home/Title'
import { context } from '@/context/ContextProvider'


export default function CartTotal() {
    const { currency, getCartAmount, delivery_fee,router } = useContext(context);
  
    return (
        <div className='flex justify-end mt-10'>

            <div className='mx-10'>
                <div>
                    <Title text1={"Total"} text2={"Cart"} />
                </div>
                <div className='w-full sm:w-[450px]'>
                    <div className='flex justify-between border-b py-2'>
                        <p>Subtotal</p>
                        <p>{currency}{getCartAmount()}.00</p>
                    </div>
                    <div className='flex justify-between border-b py-2'>
                        <p>Shopping Fee</p>
                        <p>{currency}{delivery_fee}.00</p>
                    </div>
                    <div className='flex justify-between border-b py-2'>
                        <p className='text-black font-bold'>Total</p>
                        <p>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
                    </div>

                </div>

                {/* <div className='flex justify-end mt-4'>
                    <button
                        onClick={() => router.push('/place-order')}
                        className='py-2 px-5 bg-black text-white rounded-md active:bg-gray-700'
                    >
                        PROCEED TO CHECKOUT
                    </button>
                </div> */}

            </div>
        </div>
    )
}
