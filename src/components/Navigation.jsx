import React from 'react'
import logo from '../assets/logo 1.png'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { Show, SignInButton, UserButton } from '@clerk/react' // import za Clerk tagove
import { useSelector } from "react-redux"


function Navigation() {

    const cart = useSelector((state) => state.cart.cart)

  return (
    <div className='bg-primary1'>
        <div className='max-w-7xl mx-auto px-[10px] py-[20px] flex flex-col gap-[16px] md:flex-row justify-between items-center'>
            <Link to={'/'}>
                <img  src={logo}/>
            </Link>
            <div className='bg-white rounded-[6px]'>
                <input className='placeholder: text-[14px] font-semibold outline-none border-none px-[10px]' placeholder='Search products'></input>
                <button className='bg-primary2 text-white font-semibold px-[30px] py-[14px] rounded-[6px]'>Search</button>
            </div>
            <div className='flex gap-[16px]'>
                <div className='flex items-center'>
                    {/**kada je user logovan**/}
                    <Show when="signed-out">
                      <CgProfile className='text-white' />
                      <SignInButton className='ml-[8px] text-white text-[14px]'/>
                    </Show>
                    {/**kada user nije logovan**/}
                    <Show when="signed-in">
                      <UserButton className='ml-[8px] text-white text-[14px]'/>
                    </Show>
                </div>
                <div className='flex items-center'>
                    <FaHeart className='text-white' />
                    <span className='ml-[4px] text-[12px] font-semibold text-white bg-primary2 px-[5px] rounded-full'>0</span>
                    <Link className=' text-[14px] text-white ml-[8px]'>Favorite</Link>
                </div>
                <div className='flex items-center'>
                    <FaCartShopping className='text-white' />
                    <span className=' text-[12px] font-semibold text-white bg-primary2 px-[5px] rounded-full ml-[4px]'>{cart.length}</span>
                    <Link to={'/cart'} className='text-[14px] text-white ml-[8px]'>Cart</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation