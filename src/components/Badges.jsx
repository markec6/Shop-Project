import React from 'react'
import { ImBoxRemove } from "react-icons/im";
import { BsFillShieldLockFill } from "react-icons/bs";
import { BsHandThumbsUpFill } from "react-icons/bs";



function Badges() {
  return (
    <div className='bg-primary3 py-[20px] md:py-[40px]'>
        <div className='max-w-7xl mx-auto px-[10px] flex flex-row flex-wrap gap-[24px] md:flex-row justify-around md:gap-0'>
            <div className='flex flex-row-reverse justify-center gap-[36px] md:gap-[24px]  items-center  md:flex-row'>
                <ImBoxRemove className='size-[32px] md:size-[42px] text-primary2'/>
                <div className='flex flex-col justify-start gap-[6px]'>
                    <p className='text-[26px] font-semibold text-primary1'>Free delivery</p>
                    <p className='text-[14px] text-primary1/80'>On order above $50,00</p>
                </div>
            </div>
            <div className='flex flex-row-reverse justify-center gap-[36px] md:gap-[24px]   items-center md:flex-row'>   
                <BsHandThumbsUpFill className='size-[32px] md:size-[42px] text-primary2'/>
                <div className='flex flex-col justify-start gap-[6px]'>
                    <p className='text-[26px] font-semibold text-primary1'>Best quality</p>
                    <p className='text-[14px] text-primary1/80'>Best quality in low price</p>
                </div>
            </div>
            <div className='flex flex-row-reverse justify-center gap-[36px] md:gap-[24px]   items-center md:flex-row'>
                <BsFillShieldLockFill className='size-[32px] md:size-[42px] text-primary2'/>
                <div className='flex flex-col justify-start gap-[6px]'>
                    <p className='text-[26px] font-semibold text-primary1'>1 year warranty</p>
                    <p className='text-[14px] text-primary1/80'>Avalaible warranty</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Badges