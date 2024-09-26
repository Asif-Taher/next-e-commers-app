'use client'
import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { context } from '@/context/ContextProvider'
import ProductItem from '../ProductItem';

export default function BestSeller() {
  const {products} = useContext(context)
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(()=>{
    const bestProduct = products.filter((item)=>(item.bestseller))
    setBestSeller(bestProduct.slice(0,5))
  },[products])
  return (
    <div className='mt-5'>
      <div className='mx-10'>
        <div className='text-center'>
          <Title text1={"BEST"} text2={"SELLERS"}/>
          <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia maxime adipisci iste, reprehenderit debitis!</p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4'>
          {
            bestSeller.map((item,index)=>(
              <ProductItem key={index} item={item}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}


