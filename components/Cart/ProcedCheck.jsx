'use client'
import { context } from '@/context/ContextProvider';
import React, { useContext } from 'react'

export default function ProcedCheck() {
    const { router } = useContext(context);
    return (
        <div>
            <div className=' mx-10 flex justify-end mt-4'>
                <button
                    onClick={() => router.push('/place-order')}
                    className='py-2 px-5 bg-black text-white rounded-md active:bg-gray-700'
                >
                    PROCEED TO CHECKOUT
                </button>
            </div>
        </div>
    )
}
