import React from 'react'

export default function Title({text1,text2}) {
  return (
    <div className='inline-flex items-center mb-3 gap-1'>
      <p className='text-gray-500 text-sm lg:text-3xl '>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
      <p className='h-1 w-10 bg-gray-400'></p>
    </div>
  )
}

