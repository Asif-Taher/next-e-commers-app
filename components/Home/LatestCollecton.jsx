'use client'
import { context } from '@/context/ContextProvider'
import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import ProductItem from '../ProductItem';
import Link from 'next/link';

export default function LatestCollecton({text1,text2}) {
  const {products} = useContext(context)
  const [latestProduct, setLatestProduct] = useState([]);

  //useEffect use for slice products element

  useEffect(()=>{
    setLatestProduct(products.slice(0,10));
  },[])

  return (
    <div className='mt-5'>
     <div className='mx-10 '>
      <div className='text-center'>
      <Title text1={"Latest"} text2={"Collection"} />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quo dignissimos porro explicabo architecto consectetur.</p>

      </div>
      {/* products rendering */}
     <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 py-3'>
      {
        latestProduct.map((item,index)=>(
   
           <ProductItem key={index} item={item} />
       
        ))
      }
     </div>
     </div>
    </div>
  )
}
