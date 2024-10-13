import React from 'react'
import Title from '../Home/Title'
import Image from 'next/image'
import { assets } from '@/public/assets/frontend_assets/assets'

export default function AboutBanner() {
    return (
        <div className="mt-5">
            <div className="mx-10 ">
                <div className="text-center">
                    <Title text1={"ABOUT"} text2={"US"} />
                </div>

                <div className="flex flex-col gap-16 sm:flex-row  mt-5">
                    <Image src={assets.about_img} alt="about image" />

                    <div className="flex flex-col gap-6">

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi dicta, excepturi minus porro libero quaerat fugit quidem quo perferendis veritatis. Eos fugit et quam. Reiciendis perspiciatis mollitia soluta velit quia iste dignissimos amet accusantium consequatur pariatur, explicabo, odit rerum necessitatibus iure, fugit dolorem repellendus eligendi? Inventore, voluptatibus numquam quis id aperiam, maiores est amet labore neque itaque mollitia non nihil a incidunt quo similique adipisci assumenda? Consequatur consequuntur, saepe earum error et ipsa cum ducimus numquam tenetur quos amet suscipit!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis facilis iure impedit quae fugit voluptatum officia explicabo! Officia voluptatum explicabo autem sint velit eaque numquam omnis porro perspiciatis. Modi est nam placeat delectus dolorem molestias minus eaque! Ullam enim ipsum accusantium omnis quod beatae cum ad deserunt commodi eaque excepturi harum quasi non libero corrupti impedit nihil, blanditiis quis dolores ipsa consequatur. Nulla nostrum harum possimus quae nisi iusto illum?</p>
                        <b className="text-2xl">Our Mession</b>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, illum odit. Autem magnam, exercitationem ducimus adipisci deleniti maxime ipsum facilis, quis, illum quaerat minus nostrum iusto. Labore sed vitae consequatur voluptatibus officia pariatur a doloribus iusto cum, et doloremque facilis ex, aliquam quam facere possimus eos? Neque quos officiis officia, omnis fugit consectetur excepturi eius consequuntur aut voluptatem iure obcaecati!</p>

                    </div>
                </div>

                {/* second section */}
                <div className="mt-5">
                    <Title text1={"WHY CHOOSE"} text2={"US"} />

                </div>

                <div className='flex flex-col md:flex-row text-sm mb-20'>
                    <div className='border px-10 md:px-16 py-8 sm:px-20 gap-5'>
                        <h2>Quality Assurance: </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, totam unde. Ut veritatis impedit quo corporis quisquam necessitatibus, eos excepturi.</p>

                    </div>
                    <div className='border px-10 md:px-16 py-8 sm:px-20 gap-5'>
                        <h2>Quality Assurance: </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, totam unde. Ut veritatis impedit quo corporis quisquam necessitatibus, eos excepturi.</p>

                    </div>
                    <div className='border px-10 md:px-16 py-8 sm:px-20 gap-5'>
                        <h2>Quality Assurance: </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, totam unde. Ut veritatis impedit quo corporis quisquam necessitatibus, eos excepturi.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
