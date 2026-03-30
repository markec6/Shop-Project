//import za sam swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import samog styla za nas slider
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductService from '../service/productService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setCart} from "../Redux/cartSlice"

function Hero() {

    const [slideProducts, setSlideProducts] = useState([])


    // useEffect za sve Proizvode
    useEffect(() => {
        ProductService.allProducts()
            .then((res) => {
                setSlideProducts(res.data.products)
            })
            .catch((err) => console.log(err))
    },[])

    const dispatch = useDispatch()

  return (
    <div className='py-[16px] max-w-7xl mx-auto md:py-[30px]'>
      <Swiper
        // 1. Ovo su sve stavke koje uradio pre zavrsenog slide, sa dokumentacije swiper.js react
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true} 
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        // className="h-full w-full"
      >   
        {/** pravimo slide za svaki product pojedinacno jer je w-100%**/}
        {slideProducts.slice(5, 8).map((product, index) => (
    <SwiperSlide key={index} className="w-[100%]">
       {/* Tek unutar slajda praviš svoj dizajn */}
       <div className="flex flex-col-reverse items-center md:flex-row items-center justify-around p-10 h-full">
          <div className='w-[100%] md:w-auto flex flex-col items-center'>
             <h1 className="text-[40px] font-semibold mb-[16px] text-center">{product.title}</h1>
             <div className='flex flex-col md:flex-row gap-[16px] items-center'>
              <Link to={'/cart'} onClick={() => {dispatch(setCart(product))}} className="px-0 py-0 w-[100%] md:w-auto md:px-[32px] md:py-[16px] bg-primary1 text-white font-semibold  py-4 rounded mt-5">Add to cart</Link>
              <Link to={`/Product/${product.id}`} className='px-0 py-0 w-[100%] md:w-auto md:px-[32px] md:py-[16px] bg-primary2 text-white font-semibold  py-4 rounded mt-5'>View more</Link>
             </div>
          </div>
            <div className='relative'>
                {/* Probaj prvo thumbnail, a ako neće, onda images[0] */}
                <img 
                    src={product.thumbnail || product.images[1]} 
                    alt={product.title} 
                    className="w-full" 
                />
                <div className='absolute shadow-xl/30 bottom-[20px] right-[45px] py-[20px] px-[20px] bg-primary2 rounded-[100px]'>
                  <p className='text-[18px] font-semibold text-primary3'>Sale</p>
                </div>
            </div>
       </div>
    </SwiperSlide>
  ))}
        </Swiper>
    </div>
  )
}

export default Hero