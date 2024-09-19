'use client'
import React, {createContext, useState } from 'react'
import { products } from '@/public/assets/frontend_assets/assets'

export const context = createContext()
const  ContextProvider = ({children}) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false)
    const info = {
       products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch
    }
  return (
    <context.Provider value={info}>
      {children}
    </context.Provider>
  )
}
export default ContextProvider;
