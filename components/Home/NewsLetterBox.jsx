import React from 'react'

export default function NewsLetterBox() {
    return (
        <div className='mt-10'>
            <div className='mx-10 flex items-center justify-center'>
                <div>
                    <h2 className='text-2xl lg:text-4xl font-bold mb-5'>Subscribe now & get 20% off</h2>
                    <p className='text-gray-500 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, perferendis.</p>
                    <div className='relative'>
                        <input type="email" placeholder='Enter your mail' className='p-2 h-10 w-full border'/>
                        <button type='submit' className='absolute top-[2px] text-sm right-0 bg-black text-white p-2'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
