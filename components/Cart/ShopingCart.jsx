'use client'
import { context } from '@/context/ContextProvider'
import React, { useContext, useEffect, useState } from 'react'
import Title from '../Home/Title';
import Image from 'next/image';
import { assets } from '@/public/assets/frontend_assets/assets';

export default function ShopingCart() {
    const {products, currency, cartItems,updateQuantity} = useContext(context);
    const [cartData, setCartDate] = useState([]);
    
    useEffect(() => {
        console.log("cartItems:", cartItems);  // Log cartItems
        const tempData = [];
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item],
                    });
                }
            }
        }
        setCartDate(tempData);  // Log tempData
    }, [cartItems]);
    

  return (
    <div className='mt-5'>
       <div className='mx-10'>
       <div className='text-center'>
        <Title text1={"Your"} text2={"Cart"}/>
       </div>

       <div>
        {
            cartData.map((item,index) =>{
                const productData = products.find((product)=> product._id === item._id);
                return(
                    <div key={index} className='border-t border-b text-gray-700 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3  py-4'>
                        <div className='flex gap-6'>
                   
                            <Image className='w-16 sm:20' src={productData.image[0]} alt='' />
                   
                        <div>
                            <p>{productData.name}</p>
                            <div className='flex gap-3 items-center'>
                                <p>{currency}{productData.price}</p>
                               <p className='bg-slate-100 py-1 px-3'>  {item.size}</p>
                            </div>
                        </div>
                        </div>
                        <div className='text-center mt-5'>
                        <input onChange={(e) => e.target.value === "" || e.target.value === "0" ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='w-16 h-8 bg-slate-200 text-center rounded-sm' type="number" min={1} defaultValue={item.quantity}/>
                        </div>
                        <div className='flex justify-end items-center'>
                        <Image onClick={()=>updateQuantity(item._id, item.size, 0)} className='w-5 text-end cursor-pointer' src={assets.bin_icon} alt='' />

                        </div>
        
                    </div>
                )
            })
        }
       </div>
       </div>
    </div>
  )
}
