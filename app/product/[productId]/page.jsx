'use client'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const {productId} = useParams();
  return (
    <div>
      <h3>This is dynamic product route: {productId}</h3>
    </div>
  )
}
