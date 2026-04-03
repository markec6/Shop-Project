import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { LuTruck } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setIsHeader } from '../Redux/productSlice';

function Header() {
    const isHeader = useSelector((state) => state.product.isHeader)
    const dispatch = useDispatch()
    function ShowHeader() {
        dispatch(setIsHeader(false))
    }

  return (
   <>
   {isHeader && (
    <div className='flex flex-col items-center gap-[10px] md:flex-row justify-between px-[10px]  max-w-7xl mx-auto py-[10px] md:py-[20px]'>
        <div className='flex flex-row items-center'>
            <p className='text-[12px]'>Need help? Call us:
                <a className='font-bold text-[14px] text-green-300 pl-[4px]' href='tel: 0628723227'>
                     062-87-23-227
                </a>
            </p>
        </div>
        <div className='flex gap-[12px] items-center'>
            <div className='flex gap-[5px] items-center'>
                <IoLocationOutline />
                <p className='text-[14px]'>Our Store</p>
            </div>
            <div className='flex gap-[5px] items-center'>
                <LuTruck />
                <p className='text-[14px]'>Track your order</p>
            </div>
            <RxCross2 className='ml-[10px] cursor-pointer' onClick={ShowHeader}/>
        </div>
    </div>
   )}
    </>
    
  )
}

export default Header