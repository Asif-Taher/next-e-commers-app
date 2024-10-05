'use client'
import React, {createContext, useEffect, useState } from 'react'
import { products } from '@/public/assets/frontend_assets/assets'
import { useRouter } from 'next/navigation';

export const context = createContext()
const  ContextProvider = ({children}) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems,setCartItem] = useState({});
  const router = useRouter()

  const addToCart = async (itemId, size) => {
    // Clone the existing cart data
    const cartData = { ...cartItems };  // Shallow clone since we'll handle nested objects manually

    // Check if the item exists in the cart
    if (!cartData[itemId]) {
      // If item doesn't exist, create an object for the item
      cartData[itemId] = {};
    }
  
    // Check if the specific size exists for the item
    if (!cartData[itemId][size]) {
      // If size doesn't exist, set quantity to 1
      cartData[itemId][size] = 1;
    } else {
      // If size exists, increment the quantity
      cartData[itemId][size] += 1;
    }
  
    // Update the cart items state
    setCartItem(cartData);
  };
  
  const getCartCount  = () =>{
    let totalCount = 0;
    for(const items in cartItems){
      for(const item in cartItems[items]){
        try {
            if(cartItems[items][item] > 0 ){
              totalCount += cartItems[items][item];
            }
        } catch (error) {
          
        }
      }
    }
    return totalCount;
  }

  // getCartAmount function

  const getCartAmount = () =>{
    let totalAmount = 0;
    for(const items in cartItems){
      let itemInfo = products.find((product) => product._id === items);
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item] > 0){
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          
        }
      }
    }
    return totalAmount;
  }


  const updateQuantity = async (itemId, size, quantity)=>{
    let cartData = {...cartItems};
    cartData[itemId][size] = quantity;
    setCartItem(cartData);
  }
    const info = {
       products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,
        cartItems, addToCart,getCartCount,updateQuantity,getCartAmount,router
    }
  return (
    <context.Provider value={info}>
      {children}
    </context.Provider>
  )
}
export default ContextProvider;
