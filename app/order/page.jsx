'use client'
import Title from '@/components/Home/Title';
import { context } from '@/context/ContextProvider';
import Image from 'next/image';
import React, { useContext } from 'react';

export default function Page() {
  const { products, currency } = useContext(context);
  
  return (
    <div className="mt-5">
      <div className="mx-10 p-2">
        <div>
          <Title text1="MY" text2="ORDER" />
        </div>
      
        <div>
          {
            products.slice(1, 4).map((item, index) => (
              <div key={index} className="border-t border-b gap-3 flex flex-col sm:gap-5 justify-between p-3 items-center sm:flex-row">
                <div className="flex gap-2">
                  <Image className="w-[90px] sm:w-[50px] rounded-sm" src={item.image[0]} alt="" />
                  <div className="min-w-[400px]">
                    <p className="sm:text-sm">{item.name}</p>
                    <div className="flex gap-2">
                      <p>{currency}{item.price}</p>
                      <p>Quantity:1</p>
                      <p>Size:M</p>
                    </div>
                    <p>Date: <span className="text-slate-400 text-sm">1, friday, 2024</span></p>
                    <p>Payment: <span className="text-slate-400 text-sm">COD</span></p>
                  </div>
                </div>
                <div className="flex gap-2 items-center py-1 px-3 bg-gray-50 rounded-sm cursor-pointer">
                  <p className="min-h-2 w-2 rounded-full bg-green-500"></p>
                  <p>Order Place</p>
                </div>
                <div className="py-1 px-3 bg-gray-50 rounded-sm cursor-pointer">
                  <p>Track Order</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
