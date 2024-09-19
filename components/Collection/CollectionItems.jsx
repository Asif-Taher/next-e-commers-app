'use client'
import { context } from '@/context/ContextProvider'
import { assets } from '@/public/assets/frontend_assets/assets';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import Title from '../Home/Title';
import ProductItem from '../ProductItem';
import Link from 'next/link';

export default function CollectionItems() {

  const { products, search, showSearch } = useContext(context)
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent')

  //ToggleCategory function 
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value]);
    }
  }


  // toggleSubCategory Function

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }
  //useEffect for setFilterProducts

  //applyFilter function for  lilter the error element

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (search && showSearch) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProduct(productsCopy);
  }


  // use function for selection price for sort product  box

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProduct(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProduct(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;

    }
  }
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch])

  //for sortType 

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div>
      <div className='mx-10 flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/* Filters Options  */}
        <div className='min-w-60 '>
          <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
            <Image className={`h-3 w-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} src={assets.dropdown_icon} alt='' />
          </p>   
          {/* Categroy filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6  sm:block ${showFilter ? "" : "hidden"}`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory} /> Men
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} /> Women
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} /> Kids
              </p>
            </div>
          </div>
          {/* SubCategroy filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6  sm:block ${showFilter ? "" : "hidden"}`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory} /> Topwear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
              </p>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTION'} />
            {/* Products sort */}
            <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-1 ml-2'>
              <option value="relavent"> Relavent</option>
              <option value="low-high"> Low to High</option>
              <option value="high-low"> High to Low</option>
            </select>
          </div>
          {/* map products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {
              products.map((item, index) => (  
                <Link href={`/product/${item._id}`}>
                        <ProductItem key={index} item={item} />                     
                </Link>      
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
