import CartTotal from '@/components/Cart/CartTotal'
import ProcedCheck from '@/components/Cart/ProcedCheck'
import ShopingCart from '@/components/Cart/ShopingCart'
import React from 'react'

export default function page() {
  return (
    <div>
      <ShopingCart />
      <CartTotal />
      <ProcedCheck />
    </div>
  )
}
