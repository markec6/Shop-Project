import React from 'react'
import { Rating } from "react-simple-star-rating"
import { AiFillHeart } from "react-icons/ai";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setCart} from '../Redux/cartSlice';

function SingleProductComponent({product}) {

    const dispatch = useDispatch()

    //state za prikaz slike na klik
    const [currnetImage, setCurrentImage] = useState(0)

  return (
    <div className='w-full flex flex-col md:flex-row gap-[46px]'>
        <div className='w-[100%] md:w-[50%]'>
            <img className='w-[100%] border-1 border-primary1 bg-radial-[at_50%_75%] rounded-[10px] from-sky-200 via-blue-400/20 to-indigo-900/60 to-90% mb-[20px]' src={product.images[currnetImage]}/>
            <div className='flex w-[100%] justify-center gap-[24px] '>
                {product.images.slice(0,3).map((img, index) => {
                    return <img className={`w-[30%] border px-[6px] rounded-[6px] cursor-pointer ${
                            currnetImage === index ? 'border-2 border-primary2' : 'border-OurBorder'
                             }`}
                            key={index} 
                            src={img} 
                            onClick={() => setCurrentImage(index)}/>
                })}
            </div>
        </div>
        <div className='w-[100%] md:w-[50%] flex flex-col gap-[16px]'>
                <h2 className='text-[32px] text-primary1 font-semibold'>
                    {product.title}
                </h2>
                <div className='flex gap-[24px] items-center'>
                   {/* <p className='text-[24px] font-semibold text-red-700/60 line-through'>$179</p> */}
                   <p className='text-[30px] font-bold text-green-400'>${product.price}</p>
                </div>
                <div className="flex items-center gap-[12px]">
                        <Rating
                        initialValue={product.rating} size={30} 
                        SVGclassName="inline-block"
                         />
                    <span className="text-[14px] font-bold opacity-70">({product.rating})</span>
                </div>
                <div className='flex gap-[12px] items-center mb-[6px]'>
                    <p className='text-[18px] opacity-80 font-semibold'>Availability: </p>
                    <p className='font-medium text-[14px]'>{product.stock.lenght > 0 ? ('In stock', product.stock) : ('Out of Stocke', product.stock)}</p>
                </div>
                <hr className='text-OurBorder/60'></hr>
                <div className='flex flex-col gap-[32px]'>
                    <p className='opacity-75'>{product.description}</p>
                    <div className='flex items-center justify-between'>
                        <Link to={'/cart'} onClick={() => dispatch(setCart(product))} className='px-[32px] py-[16px] text-white font-semibold bg-primary2 rounded-[6px]'>Add to cart</Link>
                        <div className='p-[6px] rounded-full bg-OurBorder/50'>
                           <AiFillHeart size={30}/>
                        </div>
                    </div>
                </div>
                <hr className='text-OurBorder/60 mt-[16px]'></hr>
                <div className='flex flex-col gap-[12px]'>
                    <p className='text-[14px] '>Warranty Information: <span className='font-semibold text-[16px] ml-[6px] text-primary1'>{product.warrantyInformation}</span></p>
                    <p className='text-[14px] '>Sku: <span className='font-semibold text-[16px] ml-[6px] text-primary1'>{product.sku}</span></p>
                    <p className='text-[14px] '>Policy: <span className='font-semibold text-[16px] ml-[6px] text-primary1'>{product.returnPolicy}</span></p>
                </div>
        </div>
    </div>
  )
}

export default SingleProductComponent