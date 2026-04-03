import React from 'react'
import { useState, useEffect } from 'react'
import ProductService from '../service/productService'
//import za sam swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import samog styla za nas slider
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonials() {

    const [productTest, setProductTest] = useState([])

    useEffect(() => {
        ProductService.allProducts()
            .then((res) => {
              setProductTest(res.data.products),
              console.log("EVOOO",res.data.products)
            })
            .catch((err) => console.log(err))
    },[]) 

  return (

    <div className='max-w-7xl mx-auto px-[10px] py-[30px]'>
          <Swiper
            // 1. Ovo su sve stavke koje uradio pre zavrsenog slide, sa dokumentacije swiper.js react
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            // navigation={true} 
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            // className="h-full w-full"
          >
            <div className='w-[100%]'>
          {productTest.slice(3,8).map((product, index) => (
            <SwiperSlide key={product.id}>
              <h3 className='font-semibold text-[26px] '>{product.title} Reviews:</h3>

            {/* Glavna karta za JEDAN proizvod koja sadrži 3 recenzije */}
            <div className='bg-white p-[20px] flex flex-col md:flex-row justify-around gap-[15px] py-[30px] md:py-[50px]'>
              {/** mapujemo sa svaki product revies jer ih ima vise**/}
              {product.reviews.map((rev, index) => (
                <div className='border-1 border-OurBorder rounded-[10px]
                p-[20px] w-[100%] md:w-[30%]' 
                key={index}>             
                  <div className='flex items-center gap-[15px] '>
                      {/* Avatar za test vezbu*/}
                      <div className='w-[70px] h-[70px]'>
                        <img 
                          className='rounded-full border-4 border-dashed border-yellow-400'
                          src={`https://i.pravatar.cc/150?u=${rev.reviewerName}`} 
                          alt="user" 
                        />
                      </div>

                      {/* Desno: Ime i onaj kratki komentar iz dummy-ja */}
                      <div className='flex flex-col'>
                        <span className='font-bold text-[14px]'>{rev.reviewerName}</span>
                        <p className='text-[12px] text-gray-600 line-clamp-2'>
                          {rev.comment}
                        </p>
                      </div>
                  </div>

                </div>
              ))}

        </div>
      </SwiperSlide>

          ))}
          </div>
          </Swiper>

      </div>

  )
}

export default Testimonials