'use client'
import { context } from '@/context/ContextProvider';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

export default function page() {
    const {productId} = useParams();
    const {products} = useContext(context);
    const [productData, setProductData] = useState(false);
    const [image,setImage] = useState("");

    const fetchProductData = async ()=>{
        products.map((item) => {
          if(item._id === productId){
            setProductData(item)
            setImage(item.image[0])
            return null;
          }
        })
    }

    useEffect(()=>{
      fetchProductData();
    },[products])

  
  return productData?  (
    <div>
      <div className='mx-10 border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/* product Data */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          {/* product Image */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='w-[20%] flex lg:flex-col gap-3 lg:h-[500px] lg:overflow-y-scroll sm:flex-row '>
                {
                  productData.image.map((item,index)=>(
                    <Image src={item} width={120} height={120} key={index} className='cursor-pointer' />
                  ))
                }
            </div>
            <div className='w-[74%] ml-11 sm:w-full'>
                  <Image className='' width={500} height={450} src={image} alt='product image'/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  ) : <div className='opacity-0'></div>
}
