//import za sam swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import samog styla za nas slider
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector, useDispatch } from 'react-redux'
import { setFavoriteProduct } from "../Redux/favoriteSlice"
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import {setCart} from "../Redux/cartSlice"
import { toast } from 'react-toastify';
import { BsXSquareFill } from "react-icons/bs";


function FavoriteComponent() {

    const favorite = useSelector((state) => state.favorite.favorite)
    const dispatch = useDispatch()

  return (
    <div className='py-[40px]'>
        <h2 className='text-[32px] font-semibold mb-[32px]'>
            Favorites products
        </h2>
        {favorite.length > 0 ? (
                    <div className='flex flex-col gap-[50px]'>
            {favorite.map((product, index) => (
                <div className={`flex flex-col md:flex-row md:justify-center lg:justify-between gap-[20px] md:gap-[24px]  items-center ${index % 2 !== 0 ?' md:flex-row-reverse' : 'md:flex-row' }`}>
                    <div className='relative w-[100%] md:w-[50%] lg:w-[40%] border-2 border-primary1 rounded-[10px]'>
                        <Swiper 
                        // 1. Ovo su sve stavke koje uradio pre zavrsenog slide, sa dokumentacije swiper.js react
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={true} 
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    > 
                        {product.images.slice(0,3).map((img, index) => (
                            <SwiperSlide className='w-full p-[20px]' key={index}>
                                <img className='w-full'
                                src={img}
                                alt='product-images'/>
                            </SwiperSlide>
                        ))}
                        <div onClick={() => {
                        // state iz favoriteSlice
                            dispatch(setFavoriteProduct(product))
                        }} className={`absolute top-[20px] right-[20px] p-[8px]   transition-all duration-300  rounded-full border border-OurBorder/20 cursor-pointer z-10
                            ${favorite.some(item => item.id === product.id) ? 'bg-red-600/70' : 'bg-OurBorder/20'}`}>
                            <AiFillHeart className="cursor-pointer"/>
                        </div>
                        </Swiper>
                    </div>
                    <div className='p-[24px] flex flex-col gap-[12px] w-[100%] md:w-[50%] lg:[60%] md:p-[32px] bg-primary1 rounded-[10px] text-white'>
                            <h3 className='text-[26px] font-sans font-semibold'>
                                {product.title}
                            </h3>
                            <div className='flex gap-[12px] items-center mb-[24px]'>
                                <p className='font-semibold text-[14px] opacity-70'>{product.shippingInformation}</p>
                                <p className='text-[12px] text-primary1/70'>{product.returnPolicy}</p>
                            </div>
                            <div className='w-[100%] flex flex-col gap-[24px] p-[16px] border border-OurBorder rounded-[6px] md:w-[60%]'>
                                <p>Brand: <span className='ml-[18px] text-[14px] font-semibold'>{product.brand}</span></p>
                                <p>Category: <span className='ml-[18px] text-[14px] font-semibold'>{product.category}</span></p>
                                <p>Rating: <span className='ml-[18px] text-[14px] font-semibold'>{product.rating}</span></p>
                                {/* <p>{product.brand}</p>
                                <p>{product.dimensions}</p>
                                <p>{product.meta}</p> */}
                            </div>
                            <div className='flex flex-col gap-0 md:flex-row md:gap-[12px]'>
                                <Link to={'/cart'} onClick={() => {dispatch(setCart(product)), toast.success('Success added to cart!')}} className="text-center w-[100%] md:w-auto md:px-[32px] md:py-[16px] bg-white text-primary1 font-semibold  py-4 rounded mt-5 md:text-[14px]">Add to cart</Link>
                                <Link to={`/Product/${product.id}`} className='text-center w-[100%] md:w-auto md:px-[32px] md:py-[16px] bg-primary2 text-white font-semibold  py-4 rounded mt-5 md:text-[14px]'>View more</Link>
                            </div>
                    </div>  
                </div>
            ))}
        </div>
        ) : <div className='w-[90%] md:w-[80%] h-[300px] mx-auto flex flex-col md:flex-row items-center justify-center bg-primary1 text-white gap-[24px] rounded-[10px]'>
                <BsXSquareFill items-center />
                <p className='text-center text-[24px] font-semibold'>Idalje nemas favorite</p>
            </div>}

    </div>
  )
}

export default FavoriteComponent