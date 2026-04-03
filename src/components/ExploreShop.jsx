import React from 'react'
import BgImg from '../assets/Explore-shop-image.png'
import { Link } from 'react-router-dom'

function ExploreShop() {
  return (
    <div className='max-w-7xl mx-auto px-[10px] my-[50px] md:my-[100px]'>
        <div 
        className='h-[300px] md:min-h-[400px] object-cover rounded-[10px] flex flex-col justify-center opacity-90'
        style={{backgroundImage: `url(${BgImg})`}}
        >
            <div className='w-[100%] md:w-[60%] h-[100%] py-[20px] mx-auto flex flex-col items-center md:items-end justify-center text-white'>
                <p className='text-[12px] font-semibold '>New Laptop</p>
                <h3 className='text-[32px] font-semibold mb-[24px]'>Sale up to 50% off</h3>
                <p className='opacity-80 mb-[16px]'>12 inch hd display</p>
                <Link className=' font-semibold py-[16px] text-center rounded-[6px] px-[38px] bg-primary2'>Explore shop</Link>
            </div>
        </div>
    </div>
  )
}

export default ExploreShop