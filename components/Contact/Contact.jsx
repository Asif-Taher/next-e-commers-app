import { assets } from '@/public/assets/frontend_assets/assets'
import Image from 'next/image'
import React from 'react'
import Title from '../Home/Title'

export default function Contact() {
    return (
        <div className='mt-5'>
            <div className='mx-10'>
                <div className='text-center mt-5'>
                    <Title text1={"CONTACT"} text2={"US"}/>
                </div>
                <div className='flex flex-col sm:flex-row gap-10 justify-center mt-5'>
                    <div>
                        <Image width={400} src={assets.contact_img} alt="contact" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <b className='text-3xl'>Our State</b>
                        <div>
                            <p>54709 Willmims Station</p>
                            <p>Suite 350, Washingtong, USA</p>
                        </div>
                        <div>
                            <p>Tel: (415) 555-</p>
                            <p>Suite 350, Washingtong, USA</p>
                        </div>
                        <b className='text-3xl'>Career at Forever</b>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, id?</p>
                        <button className='border px-8 py-2 w-40'>Explore jobs</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
