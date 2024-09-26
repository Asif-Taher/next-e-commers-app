'use client'
import RelatedProduct from '@/components/Collection/RelatedProduct';
import { context } from '@/context/ContextProvider';
import { assets } from '@/public/assets/frontend_assets/assets';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

export default function page() {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(context);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [products])


  return productData ? (
    <div>
      <div className='mx-10 border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/* product Data */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          {/* product Image */}
          <div className='flex-1 basis-1/2 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='w-[20%] flex lg:flex-col md:flex-col gap-3 lg:h-[400px] lg:overflow-y-scroll sm:flex-row '>
              {
                productData.image.map((item, index) => (
                  <Image onClick={() => setImage(item)} src={item} width={120} height={120} key={index} className='cursor-pointer w-full' />
                ))
              }
            </div>
            <div className='w-[74%] ml-11 md:w-full lg:w-full overflow-hidden'>
              <Image className='hover:scale-110 transition-transform duration-500 rounded-md' width={500} height={450} src={image} alt='product image' />
            </div>
          </div>
          {/* product Informetion */}
          <div className='basis-1/2'>
            <h1>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <Image src={assets.star_icon} alt='star icon' className='w-3.5' />
              <Image src={assets.star_icon} alt='star icon' className='w-3.5' />
              <Image src={assets.star_icon} alt='star icon' className='w-3.5' />
              <Image src={assets.star_icon} alt='star icon' className='w-3.5' />
              <Image src={assets.star_dull_icon} alt='star icon' className='w-3.5' />
              <p className='pl-3'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='mt-5'>
              <p className='mb-3'>Select Size</p>
              <div className='flex gap-2'>
                {
                  productData.sizes.map((item, index) => (
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size? "border-orange-400" : ""}`} key={index}>{item}</button>
                  ))
                }

              </div>

            </div>
          <button onClick={()=>addToCart(productData._id, size)} className=' px-4 py-2  mt-5 rounded-md bg-black text-white text-sm font-medium active:bg-gray-700'>ADD To CART</button>
          <hr className='mt-4 bg-gray-400'/>
          <p className='mt-5 text-gray-500 text-sm'>100% orginal Product <br /> Cash on delevary available on the product. <br /> Easy return and exchange policy within 7 days</p>
          </div>
        </div>

        {/* Description and  review section */}

        <div className='mt-5'>
          <div className='flex'>
            <button className='border px-4 py-2'>Description</button>
            <button className='border px-4 py-2'>Review (122)</button>
          </div>
          <div className='mt-5 border p-4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, adipisci rerum molestias, blanditiis at doloremque earum ab ullam quisquam ipsum cum totam. Nulla, voluptas sed. Enim dicta magnam aspernatur nostrum harum eos nobis reiciendis earum nihil quaerat, distinctio quae minima! Autem, modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt, exercitationem architecto quasi quaerat tempora, est qui provident eius cum at tenetur id voluptatum itaque.</p>

          </div>

        </div>

        {/* Related Products */}
        <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
      </div>

    </div>
  ) : <div className='opacity-0'></div>
}
