import { context } from '@/context/ContextProvider'
import React, { useContext, useEffect, useState } from 'react'
import ProductItem from '../ProductItem';
import Title from '../Home/Title';

export default function RelatedProduct({category, subCategory}) {

    const {products} = useContext(context);
    const [related, setRelated] = useState([]);

    useEffect(()=>{

        if(products.length > 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
            setRelated(productsCopy.slice(0,5))
        }
    },[products])
  return (
    <div>
      <div>
       <div className='text-center mt-5'>
        <Title text1={"Related"} text2={"Product"}/>
       </div>

        <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-3 mt-5'>
            {
                related.map((item,index) =>(
                    <ProductItem item={item} key={index}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}
