'use client'
import { context } from '@/context/ContextProvider'
import { assets } from '@/public/assets/frontend_assets/assets';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

export default function SearchBar() {
    const { search, setSearch, showSearch, setShowSearch } = useContext(context);
    const [visible, setVisible] = useState(false);
    const pathname = usePathname();


    useEffect(()=>{
        if(pathname.includes('collection')){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    },[pathname])

    return showSearch && visible? (
        <div className='mx-7 border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 outline-none bg-inherit text-sm'
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                />
                <Image className='w-4' src={assets.search_icon} alt='Search Icon' />
            </div>
            <Image
                onClick={() => setShowSearch(false)}
                className='inline w-3 cursor-pointer'
                src={assets.cross_icon}
                alt='Close Search'
                aria-label="Close Search"
            />
        </div>
    ) : null;
}
