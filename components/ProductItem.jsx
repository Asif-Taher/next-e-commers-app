import { context } from '@/context/ContextProvider';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'

export default function ProductItem({item}) {
    const {_id,image,name, price} = item;
    const {currency} = useContext(context)

  return (
    <Link href={`/product/${_id}`}>
        <div className='overflow-hidden'>
            <Image src={image[0]} className='hover:scale-110 transition-all ease-in-out'/>
        </div>
        <p>{name}</p>
        <p>{currency}{price}</p>
    </Link>
  )
}
