'use client'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import logo from '@/public/assets/frontend_assets/logo.png'
import Link from 'next/link'
import searchIcon from '@/public/assets/frontend_assets/search_icon.png'
import profileIcon from '@/public/assets/frontend_assets/profile_icon.png'
import cartIcon from '@/public/assets/frontend_assets/cart_icon.png'
import menuIcon from '@/public/assets/frontend_assets/menu_icon.png'
import { context } from '@/context/ContextProvider'
export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(context)

  // menu click function is call here

  const MenuClick = (e) => {
    console.log('image is click')
    setVisible(!visible);

  }
  return (
    <div className='relative bg-gray-300'>
      <div className=' mx-10 flex items-center justify-between py-5'>
        <Link href="/">
          <Image src={logo} width={150} height={150} />
        </Link>

        <div className='hidden lg:block md:block'>
          <ul className='flex gap-4 '>
            <li className=''>
              <Link href='/' className='group relative'>
                HOME
                <hr className='absolute left-0 bottom-0 bg-red-400 h-1 w-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500' />
              </Link>
            </li>
            <li className=''>
              <Link href='/collection' className='group relative'>
                COLLECTION
                <hr className='absolute left-0 bottom-0 bg-red-400 h-1 w-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500' />
              </Link>
            </li>
            <li className=''>
              <Link href='/about' className='group relative'>
                ABOUT
                <hr className='absolute left-0 bottom-0 bg-red-400 h-1 w-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500' />
              </Link>
            </li>
            <li className=''>
              <Link href='/contact' className='group relative'>
                CONTACT
                <hr className='absolute left-0 bottom-0 bg-red-400 h-1 w-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500' />
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-5'>
          <Image onClick={() => setShowSearch(true)} src={searchIcon} width={25} height={25} alt='' className='cursor-pointer' />
          <div className='group relative'>
            <Image src={profileIcon} width={25} height={25} alt='profile image' className='cursor-pointer' />
            <div className='absolute right-0 pt-4  transition-all duration-500 hidden text-black group-hover:block'>
              <div className='bg-slate-100 w-36 p-4 flex flex-col gap-3 rounded-lg'>
                <p className='cursor-pointer hover:text-gray-400'>My Profile</p>
                <p className='cursor-pointer hover:text-gray-400'>Orders</p>
                <p className='cursor-pointer hover:text-gray-400'>Logout</p>
              </div>
            </div>
          </div>
          <div className='relative'>
            <Link href="/cart">
              <Image src={cartIcon} width={25} height={25} alt='cart image' className='cursor-pointer' />
              <p className='absolute right-[-5px] bottom-[-8px] w-[20px] h-[20px] bg-black text-white rounded-full text-center flex items-center justify-center text-sm'>{getCartCount()}</p>
            </Link>
          </div>
          <Image src={menuIcon} onClick={MenuClick} height={25} width={25} alt='menu icon' className={`sm:hidden cursor-pointer ${visible ? 'rotate-90' : 'rotate-0'}`} />
        </div>
        {/* mobile menu */}
        <div className={`absolute sm:opacity-0 top-[5.5rem] right-0  h-[15rem] rounded-sm transition-all duration-500 bg-gray-200 ${visible ? "w-52" : "w-0"}`}>
          <div className=''>
            <ul className='flex flex-col p-4 gap-4 text-center '>
              <li onClick={() => setVisible('')} className='hover:bg-white p-2 rounded-sm'>
                <Link href='/' className='group relative '>
                  HOME
                  <hr className='absolute left-0 bottom-0 bg-red-400 h-1 w-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500' />
                </Link>
              </li>
              <li onClick={() => setVisible('')} className='hover:bg-white p-2 rounded-sm'>
                <Link href='/collection' className='group relative'>
                  COLLECTION
                  <hr className='absolute left-0 bottom-0 bg-red-400 h-1 w-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500' />
                </Link>
              </li>
              <li onClick={() => setVisible('')} className='hover:bg-white p-2 rounded-sm'>
                <Link href='/about' className='group relative'>
                  ABOUT
                  <hr className='absolute left-0 bottom-0 bg-red-400 h-1 w-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500' />
                </Link>
              </li>
              <li onClick={() => setVisible('')} className='hover:bg-white p-2 rounded-sm'>
                <Link href='/contact' className='group relative'>
                  CONTACT
                  <hr className='absolute left-0 bottom-0 bg-red-400 h-1 w-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
